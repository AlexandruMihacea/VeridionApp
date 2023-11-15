import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import { useState } from 'react';
import companyApi  from '../../api/company_api';




export default function ComposedTextField() {
    const [company_name, set_company_name] = useState();
    const [company_address, set_company_address] = useState();
    const [company_website, set_company_website] = useState();
    const [company_phone, set_company_phone] = useState();



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
          <InputLabel htmlFor="component-simple">Company Name</InputLabel>
          <Input id="component-simple" defaultValue="" onChange={(e) => set_company_name(e.target.value)}/>
        </FormControl>
        <FormControl variant="standard">
          <InputLabel htmlFor="component-simple">Company Address</InputLabel>
          <Input id="component-simple" defaultValue="" onChange={(e) => set_company_address(e.target.value)}/>
        </FormControl>
        <FormControl variant="standard">
          <InputLabel htmlFor="component-simple">Website</InputLabel>
          <Input id="component-simple" defaultValue="" onChange={(e) => set_company_website(e.target.value)}/>
        </FormControl>
        <FormControl variant="standard">
          <InputLabel htmlFor="component-simple">Phone Number</InputLabel>
          <Input id="component-simple" defaultValue="" onChange={(e) => set_company_phone(e.target.value)}/>
        </FormControl>
        <button onClick={() => companyApi.getCompany({company_name,company_address}) }>Apasa</button>
      </Box>
    );
}
