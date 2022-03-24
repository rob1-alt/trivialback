const sequelize = require("./util/bdd")
const Product = require("./models/Product")
const SearchProduct = require("./controller/searchProduct")
const port = process.env.PORT || 8080;
const fs = require('fs')
const isFileTooOld = require("./util/fileUtil")


const makeRequest = require("./controller/searchProduct");
const rankingProduct = require("./controller/Ranking.js");
var express = require('express');
var app = express();

const cacheTopFile = './cache/top.json'



//create route for the API

app.get("/product-info/:product", async(req, res) =>{
    const cacheProductFile = `./cache/${req.params.product}.json`
    if (fs.existsSync(cacheProductFile)){
        if (await !isFileTooOld(cacheProductFile)) {
            res.send(fs.readFileSync(cacheProductFile))
        } else {
            fs.unlinkSync(cacheProductFile)
        }
    }
    const productId = req.params.product
    const result = await makeRequest(productId);
    fs.writeFileSync(cacheProductFile, JSON.stringify(result))
    res.send(result)
})

app.get("/product-top", async(req, res) =>{
    if (fs.existsSync(cacheTopFile)) {
        if (await !isFileTooOld(cacheTopFile)) {
            res.send(fs.readFileSync(cacheTopFile))
        } else {
            fs.unlinkSync(cacheTopFile)
        }
    }
    const rankingId = req.params.product
    const result1 = await rankingProduct(rankingId);
    fs.writeFileSync(cacheTopFile, JSON.stringify(result1.products))
    res.send(result1.products)
})


// Savoit sur quel port on écoute pour le serveur node 
app.listen(port, () => {
    console.log('Server app listening on port ' + port);
});



// fs.unlink(cacheTopFile, function (err) {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log("File removed:", cacheTopFile);
//     }
//   });