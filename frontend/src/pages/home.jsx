import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import logo from '../assets/veiridion-logo.png'
import '../style/home.css';
import CompanyForm from '../components/CompanyForm';
import { useState } from 'react';
import Card from '../components/Card';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  const [company, set_company] = useState([]);
  const [notLoading, setNotLoding] = useState(true);

  const handleDataReceived = (data) => {
    if(Array.isArray(data)){
      set_company(data);
    }else{
      set_company([data]);
    }
  }

  return (
    <Box sx={{ flexGrow: 0 }}>

      <Grid container spacing={2} className='grid-container'>

        <Grid item xs={4}>
          <Item>
              <div className='logo-container'>
                <img src={logo} alt="logo" className='logo-img' />
                <h2 className='logo-title'>eridion</h2>
                <div className='subtitle'>
                    <p>Filmographic</p>
                    <p>intelligence</p>
                </div>
              </div>
            </Item>
        </Grid>

        <Grid item xs={8}>
          <Item>
            <CompanyForm dataReceived={handleDataReceived} onLoading={setNotLoding}/>
          </Item>
        </Grid>

      </Grid>

      <div className='spacer'></div>

      <Grid container spacing={2} className='grid-container'>
        <Grid item xs={12}>
          <Item>
            <Card company={company} notLoading={notLoading}/>
          </Item> 
        </Grid>
      </Grid>


    </Box>
  
  );
}