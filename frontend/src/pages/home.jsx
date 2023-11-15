import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import logo from '../assets/veiridion-logo.png'
import '../style/Home.css';
import CompanyForm from '../components/companySearchForm';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
//   textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 0 }}>
      <Grid container spacing={2} className='grid-container'>
        <Grid item xs={4}>
          <Item className='logo'>
            <img src={logo} alt="logo" className='logo-img' />
            <h2 className='logo-title'>eridion</h2>
            <div className='subtitle'>
                <p>Filmograpgic</p>
                <p>intelligence</p>
            </div>
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item>
            <CompanyForm/>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}