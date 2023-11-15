const Company = require('../Models/CompanyModel')
const reviews = require('./onlineReviews');
require('dotenv').config()
const axios = require('axios');

const apiKey = process.env.API_KEY;
const apiURL = "https://data.soleadify.com/match/v4/companies"

const apiMethods = {

    getCompany: async (company_name, address, phone_number, website) => {
        try{

        const data = {
            commercial_names: company_name,
            address_txt:address,
            phone_number: phone_number,
            website: website
        }

            const response = await axios.post(apiURL, data,{
                headers: {
                   'x-api-key': apiKey,
                   'Content-Type': 'application/json'
                }
            })

            const company = new Company(response.data);

            const updateCompany =  reviews.setReviews(company);

            return updateCompany;
        }catch(err){
            return err;
        }
    },

}

module.exports = apiMethods;