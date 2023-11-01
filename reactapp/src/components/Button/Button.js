import React from 'react';
import Button from '@mui/material/Button';
import './button.css';

// Simple Material UI button.
// onClick prop triggers handleClick() back in Form.js to run the modifyPdf func
export default function SubmitButton({ onClick }) {
    return  (
    <div>
    <Button 
        variant="contained" 
        size="large" 
        className='button'
        onClick={onClick}
        >Update PDF</Button>
    </div>
    );
}