const con = require('../db');

const viewProductsTreeModel = async (id) => {
    let productTree = {};
    productTree["id"] = id;
    productTree["subassemblies"] = {};
    productTree["components"] = {};

    try {
        let productName = await product_name(id);
        console.log(productName[0])
        productTree["name"] = productName[0].product_name;

        let productTree1 = await product_subassemblies(id);
        for (let i = 0; i < productTree1.length; i++) {
            productTree["subassemblies"][productTree1[i].sub_assembly_id] = { "name": productTree1[i].subassembly_name, "parent": id, "isChildrenNeeded":productTree1[i].to_add_assemblies};
        }

        for (let i = 0; i < productTree1.length; i++) {
            let productTree_sub = await sub_subassemblies(productTree1[i].sub_assembly_id);
            for (let j = 0; j < productTree_sub.length; j++) {
                productTree["subassemblies"][productTree_sub[j].sub_assembly_id] = { "name": productTree_sub[j].subassembly_name, "parent": productTree1[i].sub_assembly_id, "isChildrenNeeded":productTree_sub[i].to_add_assemblies};
                productTree1.push(productTree_sub[j]);
            }
        }

        let productTree2 = await components(id);
        for (let i = 0; i < productTree2.length; i++) {
            productTree["components"][productTree2[i].sub_comp_id] = { "name": productTree2[i].item_name, "parent": id, };
        }

        for (let subAssemblyId in productTree["subassemblies"]) {
            let productTree_comp = await components(subAssemblyId);
            for (let k = 0; k < productTree_comp.length; k++) {
                productTree["components"][productTree_comp[k].sub_comp_id] = { "name": productTree_comp[k].item_name, "parent": subAssemblyId };
            }
        }
        console.log(productTree);
        return productTree;
    } catch (error) {
        throw error;
    }
};

function product_name(id){
    return new Promise((resolve, reject) => {
        con.query("SELECT product_name FROM product WHERE product_id = ?", [id], (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
}

function product_subassemblies(id) {
    return new Promise((resolve, reject) => {
        con.query("SELECT sub_assembly_id, subassembly_name, to_add_assemblies FROM sub_assemblies WHERE product_id = ?", [id], (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
}

function sub_subassemblies(id) {
    return new Promise((resolve, reject) => {
        con.query("SELECT sub_assembly_id, subassembly_name, to_add_assemblies FROM sub_assemblies WHERE parent_id = ?", [id], (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
}

function components(id) {
    return new Promise((resolve, reject) => {
        con.query("SELECT sub_comp_id, item_name FROM sub_assembly_components WHERE parent_id = ?", [id], (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
}

module.exports = viewProductsTreeModel;
