import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SubmitButton from '../Button/Button';
import ModifyPdf from '../../modifyPdf';
//import './form.css';

export default function Form() {

  const textFieldStyles = {
    margin: '25px', // Add your desired padding
  };

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = async () => {
    await ModifyPdf(inputValue);
    //console.log('Input Value:', inputValue)
  }

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
        <SubmitButton onClick={handleClick} /> 
      </div>
    </Box>
    
    );
}