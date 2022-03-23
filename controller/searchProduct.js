import Product from "../models/Product.js";
import axios from 'axios'
class searchProduct {
    
    searchProduct = async(request, response)  =>
    {
        const {productId} = request.body
      // Regarder dans la db si le produit est deja enregistré
    let product 
    try{
        product = await Product.findOne({id : productId})
    }
    catch(error){
        throw(error)
    }
    if(product) {
        return response.json(product)
    }

    const apiProduct = axios.get('https://world.openfoodfacts.org?json=true', )

    const createProduct = await Product.create({name : apiProduct.name})

    return response.json(apiProduct)

    }


    
}



export default searchProduct