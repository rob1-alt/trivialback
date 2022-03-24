const axios = require('axios')
const baseUrl = "https://world.openfoodfacts.org?json=true"

rankingProduct = async function() {
    const url = `${baseUrl}&page_size=100`
    const res = await axios.get(url)
    // Tu recois un objet ou t'as toutes les données relative au code du produit que t'as mis dans makeRequest("04963406");

    return res.data
}


module.exports = rankingProduct;
