import React, {useState} from 'react';
  // Decided to use these nice looking Material UI components for the form textfield and button:
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
  // SubmitButton function to display mui button in the form and then handle onClick action
import SubmitButton from '../Button/Button';
  // ModifyPdf function to grab PDF file, grab form input, write to the file, then produce the PDF file in-browser
import ModifyPdf from '../../modifyPdf';

/*
  Form function to handle user input and button control.
  
  Uses a State Hook to capture string anytime changes are made in the form TextField.
  The above state hook is updated by calling the handleInputChange function in the TextField's 'onChange'
  
  SubmitButton has an onClick action to call the handleClick function, which triggers
  the ModifyPdf logic and passes it the inputValue from useState() 
*/

export default function Form() {

  /* 
    Created stylesheet within the function as I was running into
    problems with CSS not generating with the material UI components.
  */

  // simple form stylesheet
  const textFieldStyles = {
    margin: '25px', 
    width: '400px'
  };

  // State Hook to handle user input
  const [inputValue, setInputValue] = useState('');

  // function to update State Hook inputValue
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // function to call ModifyPdf and pass it inputValue from the state hook
  const handleClick = async () => {
    await ModifyPdf(inputValue);
  }

  /*
    Form and Button are generated here.
    form has onChange function call to handle state hook changes
    button has onClick handleClick function call to run modifyPdf code
  */
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