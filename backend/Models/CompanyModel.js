class Company {
    constructor(data){
        this.soleadify_id = data.soleadify_id || null;
        this.match_score = data.match_score || null;
        this.company_name = data.company_name || null;
        this.company_legal_names = data.company_legal_names || [];
        this.company_commercial_names = data.company_commercial_names || [];
        this.main_country = data.main_country || null;
        this.main_region = data.main_region || null;
        this.main_city = data.main_city || null;
        this.main_street = data.main_street || null;
        this.main_postcode = data.main_postcode || null;
        this.num_locations = data.num_locations || 0;
        this.year_founded = data.year_founded || null;
        this.employee_count = data.employee_count || null;
        this.estimated_revenue = data.estimated_revenue || null;
        this.short_description = data.short_description || null;
        this.main_business_category = data.main_business_category || null;
        this.main_industry = data.main_industry || null;
        this.main_sector = data.main_sector || null;
        this.primary_phone = data.primary_phone || null;
        this.primary_email = data.primary_email || null;
        this.website_url = data.website_url || null;
        this.facebook_url = data.facebook_url || null;
        this.twitter_url = data.twitter_url || null;
        this.linkedin_url = data.linkedin_url || null;
        this.online_riviews = data.online_riviews || null;
    }
}   

module.exports = Company;
    

    


