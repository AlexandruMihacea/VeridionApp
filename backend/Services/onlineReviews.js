const Company = require("../Models/CompanyModel");
const gpt = require("./gpt");

const onlineReviews = {
        setReviews: async (company) => {
            const task = `You have the data for this company: legal name - ${company.company_legal_names}, 
            address - ${company.main_city} ${company.main_street} ${company.main_postcode}, 
            with the website - ${company.website_url}. Now, gather information about public 
            opinion about the company's products by analyzing reviews and other relevant 
            information on the Internet. Summarize these findings in a concise manner, 
            keeping the summary to a maximum of 200 words and reword it to look exactly 
            like an internet review of this company. `
            
            company.online_riviews = await gpt(task);
            
            gpt(`Can you find for me what are the predominant colors of the company and give me exactly only their hex codes in the answer you 
            will return to me: legal name - ${company.company_legal_names}, 
            address - ${company.main_city} ${company.main_street} ${company.main_postcode}, 
            with the website - ${company.website_url}`)

            return company;
        }
}

module.exports = onlineReviews;