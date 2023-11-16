const Company = require("../Models/CompanyModel");
const gpt = require("../GPT/gpt");

const useGPTMethods = {
        setReviews: async (company) => {
            const task = `You have the data for this company: legal name - ${company.company_legal_names}, 
            address - ${company.main_city} ${company.main_street} ${company.main_postcode}, 
            with the website - ${company.website_url}. Now, gather information about public 
            opinion about the company's products by analyzing reviews and other relevant 
            information on the Internet. Summarize these findings in a concise manner, 
            keeping the summary to a maximum of 200 words and reword it to look exactly 
            like an internet review of this company. `
            
            const onlineRiviews = await gpt(task);

            return onlineRiviews;
        },
}

module.exports = useGPTMethods;