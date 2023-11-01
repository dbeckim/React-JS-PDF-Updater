import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
//import './form.css';

export default function Form() {

  const textFieldStyles = {
    margin: '25px', // Add your desired padding
  };

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
    console.log('Input Value:', inputValue)

    return  (
    <Box
      component="form"
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField 
          id="outlined-multiline-static" 
          label="Type Certificate Number" 
          variant="outlined" 
          multiline
          maxRows={4}
          style={textFieldStyles}
          value={inputValue}
          onChange={handleInputChange}
          />
      </div>
    </Box>
    
    );
}