import { Button } from '@mui/material'
import { styled } from '@mui/material/styles';
import React from 'react'
import AddIcon from '@mui/icons-material/Add';

const ColorButton = styled(Button)(({ theme }) => ({
    height:'80px',
    opacity: '0.7',
    backgroundColor: '#F75C1E',
    width:'80px',
    position: 'absolute',
    bottom: '10%',
    right:'10%',
    borderRadius:'50%',
    '&:hover': {
        opacity: '1.0',
        backgroundColor: '#F75C1E'
    },
}));

export default function AddButton( props) {
    const {...other}  = props
    return (

        <ColorButton variant='contained' {...other}><AddIcon fontSize="large"></AddIcon></ColorButton>
    )
}
