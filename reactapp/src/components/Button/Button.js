import React from 'react';
import Button from '@mui/material/Button';
import ModifyPdf from '../../modifyPdf.js';
import './button.css';

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