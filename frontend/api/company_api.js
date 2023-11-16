import axios from 'axios';
const url = "http://localhost:3000/company"


const companyApi = {
    getCompany: async (company) => {
        try{
            const response = await axios.post(url,company);
            return response.data;        
        }catch(err){
            console.log(err);
        }

    }
}

export default companyApi;