import axios from 'axios';
const url = "http://localhost:3000"


const companyApi = {
    getCompany: async (company) => {
        try{
            const response = await axios.post(`${url}/company`,company);
            return response.data;        
        }catch(err){
            console.log(err);
        }

    },

    getCompaniesList: async (companies) => {
        try{
            const response = await axios.post(`${url}/companies`,companies);
            return response.data;        
        }catch(err){
            console.log(err);
        }
    }
}

export default companyApi;