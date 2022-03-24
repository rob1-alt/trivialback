const axios = require('axios');
const baseUrl = "https://world.openfoodfacts.org/api/v2"
async function makeRequest(productCode) {

    const config = {
        method: 'get',
        url: `${baseUrl}/product/${productCode}`
    }

    const res = await axios(config)
    // Tu recois un objet ou t'as toutes les données relative au code du produit que t'as mis dans makeRequest("04963406");
    console.log(res.data);
}

makeRequest("04963406");


export default makeRequest;