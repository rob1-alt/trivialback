const axios = require('axios')
const baseUrl = "https://world.openfoodfacts.org/api/v2"

makeRequest = async function(productCode) {
    const res = await axios.get(`${baseUrl}/product/${productCode}`)
    // Tu recois un objet ou t'as toutes les données relative au code du produit que t'as mis dans makeRequest("04963406");
    return res.data
}


module.exports = makeRequest;