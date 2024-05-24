const con = require('../db');
const viewProductsTreeModel = require('../ProductTreeModel/viewproducttreemodel');

const createDuplicateModel = async (id) => {
    try {
        const productTree = await viewProductsTreeModel(id);
        const subassembly_arr = [];
        const Duplicates = {};

        Duplicates[id] = generateId(productTree.name, "p");

        await duplicate_product(Duplicates[id], id);
        await duplicate_product_sec_fn(Duplicates[id], id);
        await duplicate_product_spec(Duplicates[id], id);

        for (let key in productTree.subassemblies) {
            let NewID = generateId(productTree.subassemblies[key].name, "s");
            Duplicates[key] = NewID;
            subassembly_arr.push(key);
        }

        await duplicate_sub_assembly_components(id, Duplicates);

        for (let i = 0; i < subassembly_arr.length; i++) {
            const subassemblyId = subassembly_arr[i];
            const parent_id = productTree.subassemblies[subassemblyId].parent;

            await duplicate_product_subassemblies(
                subassemblyId,
                parent_id,
                parent_id === id,
                Duplicates
            );
            await duplicate_product_subassemblies_spec(subassemblyId, Duplicates);
            await duplicate_sub_sec_functions(subassemblyId, Duplicates);
            await duplicate_sub_assembly_components(subassemblyId, Duplicates);
        }
    } catch (error) {
        console.error(error);
    }
};

module.exports = createDuplicateModel;

function duplicate_product(new_id, id) {
    return new Promise((resolve, reject) => {
        con.query(
            "INSERT INTO product(product_name, product_id, File_Location, product_main_function) SELECT product_name, ?, File_Location, product_main_function FROM product WHERE product_id= ?;",
            [new_id, id],
            (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            }
        );
    });
}

function duplicate_product_spec(new_id, id) {
    return new Promise((resolve, reject) => {
        con.query(
            "INSERT INTO product_specifications(product_id, product_specifications, product_unit, product_value) SELECT ?, product_specifications, product_unit, product_value FROM product_specifications WHERE product_id= ?;",
            [new_id, id],
            (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            }
        );
    });
}

function duplicate_product_sec_fn(new_id, id) {
    return new Promise((resolve, reject) => {
        con.query(
            "INSERT INTO product_secondary_functions(product_id, product_sec_fn) SELECT ?, product_sec_fn FROM product_secondary_functions WHERE product_id= ?;",
            [new_id, id],
            (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            }
        );
    });
}

function duplicate_product_subassemblies(id, parent_id, condition, Duplicates) {
    const query = condition
        ? "INSERT INTO sub_assemblies(product_id, subassembly_name, sub_assembly_id, sub_assembly_bought_up, file_location, subassembly_main_func, to_add_assemblies, parent_id) SELECT ?, subassembly_name, ?, sub_assembly_bought_up, file_location, subassembly_main_func, to_add_assemblies, parent_id FROM sub_assemblies WHERE sub_assembly_id= ?;"
        : "INSERT INTO sub_assemblies(product_id, subassembly_name, sub_assembly_id, sub_assembly_bought_up, file_location, subassembly_main_func, to_add_assemblies, parent_id) SELECT product_id, subassembly_name, ?, sub_assembly_bought_up, file_location, subassembly_main_func, to_add_assemblies, ? FROM sub_assemblies WHERE sub_assembly_id= ?;";

    return new Promise((resolve, reject) => {
        con.query(
            query,
            condition
                ? [Duplicates[parent_id], Duplicates[id], id]
                : [Duplicates[id], Duplicates[parent_id], id],
            (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            }
        );
    });
}

function duplicate_product_subassemblies_spec(id, Duplicates) {
    return new Promise((resolve, reject) => {
        con.query(
            "INSERT INTO sub_assemblies_specifications(sub_assembly_id, sub_assembly_specifications, sub_assembly_unit, sub_assembly_value) SELECT ?, sub_assembly_specifications, sub_assembly_unit, sub_assembly_value FROM sub_assemblies_specifications WHERE sub_assembly_id= ?;",
            [Duplicates[id], id],
            (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            }
        );
    });
}

function duplicate_sub_sec_functions(id, Duplicates) {
    return new Promise((resolve, reject) => {
        con.query(
            "INSERT INTO sub_sec_functions(sub_assembly_id, sub_secondary_functions_details) SELECT ?, sub_secondary_functions_details FROM sub_sec_functions WHERE sub_assembly_id= ?;",
            [Duplicates[id], id],
            (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            }
        );
    });
}

function duplicate_sub_assembly_components(id, Duplicates) {
    return new Promise((resolve, reject) => {
        con.query(
            "INSERT INTO sub_assembly_components(item_name, parent_id, bought_up, comp_file_location) SELECT item_name, ?, bought_up, comp_file_location FROM sub_assembly_components WHERE parent_id= ?;",
            [Duplicates[id], id],
            (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            }
        );
    });
}

const generateId = (name, char) => {
    if (name.length >= 2) {
        const firstTwoChars = name.substring(0, 2).toUpperCase();
        const date = new Date();
        const month = ("0" + (date.getMonth() + 1)).slice(-2);
        const year = date.getFullYear().toString().slice(-2);
        const specialChars = "!@$^&*()_[]{}|";
        const specialChar = specialChars.charAt(
            Math.floor(Math.random() * specialChars.length)
        );
        const orderNumbers = "0123456789";
        const orderNumber = specialChars.charAt(
            Math.floor(Math.random() * orderNumbers.length)
        );
        return char + firstTwoChars + month + year + specialChar + orderNumber;
    }
};