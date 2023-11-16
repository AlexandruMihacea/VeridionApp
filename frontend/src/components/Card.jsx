import "../style/card.css";
import SkeletonTemplate from './SkeletonTemplate';

const Card = ({company, notLoading}) => {
    return(
        <div>
            { notLoading ? 
              company && company.map((item, key) => {
                return (
                  <div key={key} className='company-container'>
                    <div className="header-company-container">
                        {
                          item.company_name === null ? <h1>The company was not found</h1>: <h1>{item.company_name}</h1>
                        }
                    </div>
                    <h4>{item.short_description}</h4>
                    <div className='compani-data-content'>
                      <div className='company-data-card' style={{backgroundColor:"#e49c2e"}}>
                        <ul>
                          <h3>Location</h3>
                          <li>{`Country: ${item.main_country}`}</li>
                          <li>{`Region: ${item.main_region}`}</li>
                          <li>{`City: ${item.main_city}`}</li>
                          <li>{`Street: ${item.main_street}`}</li>
                          <li>{`PostCode: ${item.main_postcode}`}</li>
                        </ul>
                      </div>

                      <div className='company-data-card' style={{backgroundColor:"#fbc84d"}}>
                        <ul>
                        <h3>Company Data</h3>
                          <li>{`Year Founded: ${item.year_founded}`} </li>
                          <li>{`Employee Count: ${item.employee_count}`}</li>
                          <li>{`Estimate Revenu: ${item.estimated_revenue}`}</li>
                          <li>{`Bussines Category: ${item.main_business_category}`}</li>
                          <li>{`Industry: ${item.main_industry}`}</li>
                        </ul>
                      </div>
                      <div className='company-data-card' style={{backgroundColor:"#ffaa00"}}>
                        <ul>
                        <h3>Company Contact</h3>
                          <li>{`Phone: ${item.primary_phone}`}</li>
                          <li>{`Email: ${item.primary_email}`}</li>
                          <li>{`Website: ${item.website_url}`}</li>
                          <li>{`FaceBook: ${item.facebook_url}`}</li>
                          <li>{`Twitter : ${item.twitter_url}`}</li>
                          <li>{`Linkedin : ${item.linkedin_url}`}</li>
                        </ul>
                      </div>
                    </div>
                    <div className='review-container' >
                      <h3 className="review-content-title">Online Reviews Summary</h3>
                      <h4 className="review-content">
                        {item.online_riviews}
                      </h4>
                    </div>
                  </div>
                )
              })
              : (
                <SkeletonTemplate/>
              )
            }
        </div>
    )
}

export default Card;