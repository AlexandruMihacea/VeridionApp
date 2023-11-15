import axios from 'axios';
const url = "http://localhost:8080/"


const companyApi = {
    getCompany: async (company) => {
        const response = await axios.get(url+"company", company);
        console.log(response.data);
        return response.data;
    }
}

export default companyApi;