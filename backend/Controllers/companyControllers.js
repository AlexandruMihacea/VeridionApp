const { json } = require('body-parser');
const apiMethods = require('../Services/apiMethods')

const controller = {
    getOneCompany: async (req,res) => {
        const {company_name, address_txt, phone_number, website} = req.body;
        try{
            const response = await apiMethods.getCompany(company_name, address_txt, phone_number, website);

            return res.status(200).json(response);
        }catch(err){
            return res.status(400).json(err);
        }
    },

    // getOneCompany: async (req,res) => {
    //     const {company_name, address_txt, phone_number, website} = req.body;
    //     try{
    //         const response = await apiMethods.getCompany(company_name, address_txt, phone_number, website);

    //         return response;
    //     }catch(err){
    //         return res.status(400).json(err);
    //     }
    // },

    // getAllCompanies: async (req,res) => {
    //     const companies = [];
    //         for (const el of req) {
    //             const company =  await getOneCompany(el);
    //             companies.push(company);
    //             // Introducem o întârziere de 1 secundă între apelurile funcției
    //             await new Promise(resolve => setTimeout(resolve, 1000));
    //         }

    //     return json(companies);
    // },

}

module.exports = controller;