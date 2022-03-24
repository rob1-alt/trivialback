const sequelize = require("./util/bdd")
const Product = require("./models/product")
const SearchProduct = require("./controller/searchProduct")
const port = process.env.PORT || 8000;


var express = require('express');
const { default: makeRequest } = require("./controller/searchProduct");
var app = express();




sequelize
    .sync({force: true})
  // .sync()
    .then((result) => {
    return Product.create()
    console.log(result); 
})
    .catch((err) => {
    console.log(err);
    });


    app.get("/product-info/:product", (req, res) =>{
        makeRequest(req, res)
    })


// Savoit sur quel port on écoute pour le serveur node 
app.listen(port, () => {
    console.log('Server app listening on port ' + port);
});