import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import logo from '../assets/veiridion-logo.png'
import '../style/Home.css';
import CompanyForm from '../components/companySearchForm';
import { useState } from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  const [company, set_company] = useState([]);
  const [isFetching, setFetching] = useState(true);

  const handleDataReceived = (data) => {
    set_company([data]);
  }

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Grid container spacing={2} className='grid-container'>
        <Grid item xs={4}>
            <div className='logo-container'>
              <img src={logo} alt="logo" className='logo-img' />
              <h2 className='logo-title'>eridion</h2>
              <div className='subtitle'>
                  <p>Filmograpgic</p>
                  <p>intelligence</p>
              </div>
            </div>
        </Grid>
        <Grid item xs={8}>
          <Item>
            <CompanyForm dataReceived={handleDataReceived} onDataFetching={setFetching}/>
          </Item>
        </Grid>
      </Grid>

      <Grid container spacing={2} className='grid-container'>
        <Grid item xs={12}>
          <Item>
            { isFetching || company[0] ? 
              company.map((item, key) => {
                return (
                  <div key={key} className='company-container'>
                    <h1>{item.company_name}</h1>
                    <div className='compani-data-content'>
                      <div className='company-data-container' style={{backgroundColor: 'white' && item.colors[0]}}>
                        <ul>
                          <h3>Location</h3>
                          <li>{`Country: ${item.main_country}`}</li>
                          <li>{`Region: ${item.main_region}`}</li>
                          <li>{`City: ${item.main_city}`}</li>
                          <li>{`Street: ${item.main_street}`}</li>
                          <li>{`PostCode: ${item.main_postcode}`}</li>
                        </ul>
                      </div>

                      <div className='company-data-container' style={{backgroundColor: 'white' && item.colors[1]}}>
                        <ul>
                        <h3>Company Data</h3>
                          <li>{`Year Founded: ${item.year_founded}`}</li>
                          <li>{`Employee Count: ${item.employee_count}`}</li>
                          <li>{`Estimate Revenu: ${item.estimated_revenue}`}</li>
                          <li>{`Bussines Category: ${item.main_business_category}`}</li>
                          <li>{`Industry: ${item.main_industry}`}</li>
                        </ul>
                      </div>
                      <div className='company-data-container' style={{backgroundColor: 'white' && item.colors[2]}}>
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
                    <div className='review-content' style={{backgroundColor: 'red' && item.colors[3]}}>
                      <h3>Online Reviews</h3>
                      <p>
                        {item.online_riviews}
                      </p>
                    </div>
                  </div>
                )
              })
              : (
                <Stack spacing={1}>
                  <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                  <Skeleton variant="rectangular" width={210} height={60} />
                  <Skeleton variant="rounded" width={210} height={60} />
                </Stack>
              )
            }
          </Item> 
        </Grid>
      </Grid>
    </Box>
  
  );
}