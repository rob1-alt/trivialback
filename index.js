const sequelize = require("./util/bdd")
const Product = require("./models/product")





let productId = null;
sequelize
    .sync({force: true})
  // .sync()
    .then((result) => {
    return Product.create({name: "lait ", email: "test@gmail.com"})
    console.log(result); 
})
    .catch((err) => {
    console.log(err);
    });


