import React from 'react';
import Button from '@mui/material/Button';
import ModifyPdf from '../../modifyPdf.js';
import './button.css';

export default function SubmitButton() {
    return  (
    <div>
    <Button 
        variant="contained" 
        size="large" 
        className='button'
        onClick={() => ModifyPdf()}
        >Update PDF</Button>
    </div>
    );
}