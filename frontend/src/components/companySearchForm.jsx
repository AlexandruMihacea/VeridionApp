import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import companyApi  from '../../api/company_api';

export default function ComposedTextField({dataReceived, onDataFetching}) {
    const [company_name, set_company_name] = useState(['']);
    const [company_address, set_company_address] = useState('');
    const [company_website, set_company_website] = useState('');
    const [company_phone, set_company_phone] = useState('');
    const [company, set_company] = useState({
      company_name:'', 
      address_txt:'',
      website:'', 
      phone_number:''
    });

    useEffect(() => {
      set_company({
        company_name: company_name,
        address_txt: company_address,
        website: company_website,
        phone_number: company_phone
      })
    },[company_address,company_name,company_phone,company_website])


    const sendData = async () => { 
      if (company_name[0].length === 0) {
        alert("Company Name is mandatory");
      } else if (company_address.length === 0 && company_phone.length === 0 && company_website.length === 0) {
        alert("Please fill at least one field of Address or Website or PhoneNumber");
      } else {
        try{
          onDataFetching(false)
          const response = await companyApi.getCompany(company);
          dataReceived(response);
        }catch(err){
          console.log(err);
        }finally {
          onDataFetching(true)
        }
      }
    }

    return (
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <FormControl variant="standard">
          <InputLabel htmlFor="component-simple-labe-name" error={company_name[0].length === 0}>Company Name</InputLabel>
          <Input id="component-simple-name" defaultValue="" error={company_name[0].length === 0} onChange={(e) => set_company_name([e.target.value])}/>
        </FormControl>
        <FormControl variant="standard">
          <InputLabel htmlFor="component-simple-label-address">Company Address</InputLabel>
          <Input id="component-simple-address" defaultValue="" onChange={(e) => set_company_address(e.target.value)}/>
        </FormControl>
        <FormControl variant="standard">
          <InputLabel htmlFor="component-simple-label-website">Website</InputLabel>
          <Input id="component-simple-website" defaultValue="" onChange={(e) => set_company_website(e.target.value)}/>
        </FormControl>
        <FormControl variant="standard">
          <InputLabel htmlFor="component-simple-label-phone">Phone Number</InputLabel>
          <Input id="component-simple-phone" defaultValue="" onChange={(e) => set_company_phone(e.target.value)}/>
        </FormControl>
        <Button variant="contained" onClick={sendData} style={{backgroundColor:'#fbb03c'}}>Trimite</Button>
      </Box>
    );
}
