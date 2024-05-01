const express = require('express');
const app = express();
const cors = require('cors'); // Importing CORS middleware

const bodyParser = require('body-parser'); // Assuming you have body-parser middleware
const addproduct = require('./routes/ProductRoutes/addproduct');
const viewproduct = require('./routes/ProductRoutes/viewproduct');
const updateproduct = require('./routes/ProductRoutes/updateproduct');
const deleteproduct = require('./routes/ProductRoutes/deleteproduct');
const addproductsecondaryfn = require('./routes/ProductSecondaryFnRoutes/addproductsecondaryfn');
const viewproductsecondaryfn = require('./routes/ProductSecondaryFnRoutes/viewproductsecondaryfn');
const updateproductsecondaryfn = require('./routes/ProductSecondaryFnRoutes/updateproductsecondaryfn');
const deleteproductsecondaryfn = require('./routes/ProductSecondaryFnRoutes/deleteproductsecondaryfn');
const addproductspecs = require('./routes/ProductSpecsRoutes/addproductspecs');
const viewproductspecs = require('./routes/ProductSpecsRoutes/viewproductspecs');
const updateproductspecs = require('./routes/ProductSpecsRoutes/updateproductspecs');
const deleteproductspecs = require('./routes/ProductSpecsRoutes/deleteproductspecs');
const addsubassembly = require('./routes/SubAssemblyRoutes/addsubassembly');
const viewsubassembly = require('./routes/SubAssemblyRoutes/viewsubassembly');
const updatesubassembly = require('./routes/SubAssemblyRoutes/updatesubassembly');
const deletesubassembly = require('./routes/SubAssemblyRoutes/deletesubassembly');
const addsubassemblysecfn = require('./routes/SubAssemblySecFnRoutes/addsubassemblysecfn');
const viewsubassemblysecfn = require('./routes/SubAssemblySecFnRoutes/viewsubassemblysecfn');
const updatesubassemblysecfn = require('./routes/SubAssemblySecFnRoutes/updatesubassemblysecfn');
const deletesubassemblysecfn = require('./routes/SubAssemblySecFnRoutes/deletesubassemblysecfn');
const addsubassemblyspecifications = require('./routes/SubAssemblySpecificationsRoutes/addsubassemblyspecifications');
const viewsubassemblyspecifications = require('./routes/SubAssemblySpecificationsRoutes/viewsubassemblyspecifications');
const updatesubassemblyspecifications = require('./routes/SubAssemblySpecificationsRoutes/updatesubassemblyspecifications');
const deletesubassemblyspecifications = require('./routes/SubAssemblySpecificationsRoutes/deletesubassemblyspecifications');
const addsubassemblycomponents = require('./routes/SubAssemblyComponentsRoutes/addsubassemblycomponents');
const viewsubassemblycomponents = require('./routes/SubAssemblyComponentsRoutes/viewsubassemblycomponents');
const updatesubassemblycomponents = require('./routes/SubAssemblyComponentsRoutes/updatesubassemblycomponents');
const deletesubassemblycomponents = require('./routes/SubAssemblyComponentsRoutes/deletesubassemblycomponents');

const viewproductlist = require('./routes/ProductNamesRoutes/viewproductnamesroutes');
const viewproducttree = require("./routes/ProductTreeRoutes/viewproducttreeroutes");

app.use(cors());

// Use body-parser middleware
app.use(bodyParser.json());

// Start the server
app.listen(4000, () => {
    console.log('Server is running on port 4000');
});

app.use('/api/v1/addproduct', addproduct);
app.use('/api/v1/viewproduct', viewproduct);
app.use('/api/v1/updateproduct', updateproduct);
app.use('/api/v1/deleteproduct', deleteproduct);
app.use('/api/v1/addproductsecondaryfn', addproductsecondaryfn);
app.use('/api/v1/viewproductsecondaryfn', viewproductsecondaryfn);
app.use('/api/v1/updateproductsecondaryfn', updateproductsecondaryfn);
app.use('/api/v1/deleteproductsecondaryfn', deleteproductsecondaryfn);
app.use('/api/v1/addproductspecs', addproductspecs);
app.use('/api/v1/viewproductspecs', viewproductspecs);
app.use('/api/v1/updateproductspecs', updateproductspecs);
app.use('/api/v1/deleteproductspecs', deleteproductspecs);
app.use('/api/v1/addsubassembly', addsubassembly);
app.use('/api/v1/viewsubassembly', viewsubassembly);
app.use('/api/v1/updatesubassembly', updatesubassembly);
app.use('/api/v1/deletesubassembly', deletesubassembly);
app.use('/api/v1/addsubassemblysecfn', addsubassemblysecfn);
app.use('/api/v1/viewsubassemblysecfn', viewsubassemblysecfn);
app.use('/api/v1/updatesubassemblysecfn', updatesubassemblysecfn);
app.use('/api/v1/deletesubassemblysecfn', deletesubassemblysecfn);
app.use('/api/v1/addsubassemblyspecifications', addsubassemblyspecifications);
app.use('/api/v1/viewsubassemblyspecifications', viewsubassemblyspecifications);
app.use('/api/v1/updatesubassemblyspecifications', updatesubassemblyspecifications);
app.use('/api/v1/deletesubassemblyspecifications', deletesubassemblyspecifications);
app.use('/api/v1/addsubassemblycomponents', addsubassemblycomponents);
app.use('/api/v1/viewsubassemblycomponents', viewsubassemblycomponents);
app.use('/api/v1/updatesubassemblycomponents', updatesubassemblycomponents);
app.use('/api/v1/deletesubassemblycomponents', deletesubassemblycomponents);

app.use('/api/v1/viewproductlist', viewproductlist);
app.use('/api/v1/viewproducttree', viewproducttree);