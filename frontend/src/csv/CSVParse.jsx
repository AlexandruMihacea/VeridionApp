import React, { useState } from 'react';
import Papa from 'papaparse';
import Button from '@mui/material/Button';

const CsvUploader = ({ onUpload }) => {
  const [csvFile, setCsvFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setCsvFile(file);
  };

  const handleUpload = () => {
    if (csvFile) {
      Papa.parse(csvFile, {
        complete: (result) => {
          onUpload(result.data);
        },
        header: true, 
      });
    }
  };

  return (
    <div>
        <h3>UPLOAD CSV</h3>
        <input type="file" accept=".csv" onChange={handleFileChange} />
        <Button variant="contained" onClick={handleUpload} style={{backgroundColor:'#fbb03c'}}>UPLOAD</Button>
    </div>
  );
};

export default CsvUploader;
