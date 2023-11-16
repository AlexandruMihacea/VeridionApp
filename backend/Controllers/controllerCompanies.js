const apiMethods = require('../Services/apiMethods')
const { json } = require('body-parser');


const controller = {
    getCompany: async (req,res) => {
        const {company_name, address_txt, phone_number, website} = req.body;
        try{
            const response = await apiMethods.getCompany(company_name, address_txt, phone_number, website);

            return res.status(200).json(response);
        }catch(err){
            return res.status(407).json(err);
        }
    },

    getCompaniesList: async (req,res) => {

        const companies = [];
            for (const el of req.body) {
                
                const company =  await controller.getOneCompany(el);

                companies.push(company);
            
                await new Promise(resolve => setTimeout(resolve, 1000));
            }

        return res.json(companies);
    },

    getOneCompany: async (req,res) => {
        const {company_name, address_txt, phone_number, website} = req;
        try{
            const response = await apiMethods.getCompany(company_name, address_txt, phone_number, website);

            return response;
        }catch(err){
            return res.status(400).json(err);
        }
    },

    getTest: async (req,res) => {
        return res.status(200).json(req.body);
    },
    
}


module.exports = controller;