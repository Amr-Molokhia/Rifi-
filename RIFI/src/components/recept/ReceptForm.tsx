import { Button, Grid, TextField } from '@mui/material'
import produce from '@reduxjs/toolkit/node_modules/immer'
import React, { useEffect, useState } from 'react'
import { ReceiptInput, useCreatReceptMutation,  useGetReceptByIdQuery,  useUpdatReceptMutation } from '../../generated/graphql'
import {  useHistory, useParams } from 'react-router'


const initstate : ReceiptInput= {
id:0,

}
const errors={
    amount:'',
    bankAccount:'',
    bankName:'',
    checkDate:'',
    checkbank:'',
    docClass:'',
    docDate:'',
    payType:'',
    reciveNo:'',
    saleNo:'',
    checkno:'',
    customerName:'',
}
export default function ReceiptForm() {
    const [receipt,setreceipt] =useState(initstate)
    const inputChange = (e :any) =>{
        setreceipt( {...receipt,[e.target.name]:e.target.value})
    }
    const {id}:any =useParams()
    const {data:receiptefetch,isSuccess}=useGetReceptByIdQuery({id:+id!})
    const[updateTrigger]=useUpdatReceptMutation()
    useEffect(()=>{
        if(isSuccess)setreceipt(receiptefetch?.aReceipt?.items![0]as ReceiptInput)
    },[receiptefetch,isSuccess])
    const [triggerCreate]= useCreatReceptMutation()
    const validation = (receipt :ReceiptInput) =>{
        if(receipt.amount ==='') errors.amount='Please Insert Customer Name'
        if(receipt.bankAccount ==='') errors.bankAccount='Please Insert Customer Name'
        if(receipt.bankName ==='') errors.bankName='Please Insert Customer Name'
        if(receipt.checkBank ==='') errors.checkbank='Please Insert Customer Name'
        if(receipt.checkDate ==='') errors.checkDate='Please Insert Customer Name'
        if(receipt.checkno ==='') errors.checkno='Please Insert Customer Name'
        if(receipt.customerName ==='') errors.customerName='Please Insert Customer Name'
        if(receipt.docClass ==='') errors.docClass='Please Insert Customer Name'
        if(receipt.docDate ==='') errors.docDate='Please Insert Customer Name'
        if(receipt.payType ==='') errors.payType='Please Insert Customer Name'
        if(receipt.saleNo ==='') errors.saleNo='Please Insert Customer Name'
        
    }
    const history = useHistory()
    const save =() =>{
        if(id){updateTrigger({input:receipt})}else{triggerCreate({input:receipt})}
        history.push('/Recept/list')
    }
    
    const cancel =() => {
        history.push('/Recept/list')
    }
    return (
  <Grid container>
      <form>
      <Grid item  sm={12}>
      <TextField fullWidth label=' Name' variant='outlined' name='name' value={receipt.amount} onChange={inputChange}
        {...errors.amount ==='' && { error: true, helperText: errors.amount }}
        ></TextField>
        <TextField fullWidth label=' Name' variant='outlined' name='name' value={receipt.bankAccount} onChange={inputChange}
        {...errors.bankAccount ==='' && { error: true, helperText: errors.bankAccount }}
        ></TextField>
        <TextField fullWidth label=' Name' variant='outlined' name='name' value={receipt.bankName} onChange={inputChange}
        {...errors.bankName ==='' && { error: true, helperText: errors.bankName }}
        ></TextField>
        <TextField fullWidth label=' Name' variant='outlined' name='name' value={receipt.checkBank} onChange={inputChange}
        {...errors.checkbank ==='' && { error: true, helperText: errors.checkbank }}
        ></TextField>
        <TextField fullWidth label=' Name' variant='outlined' name='name' value={receipt.checkDate} onChange={inputChange}
        {...errors.checkDate ==='' && { error: true, helperText: errors.checkDate }}
        ></TextField>
        <TextField fullWidth label=' Name' variant='outlined' name='name' value={receipt.checkno} onChange={inputChange}
        {...errors.checkno ==='' && { error: true, helperText: errors.checkno }}
        ></TextField>
        <TextField fullWidth label=' Name' variant='outlined' name='name' value={receipt.customerName} onChange={inputChange}
        {...errors.customerName ==='' && { error: true, helperText: errors.customerName }}
        ></TextField>
        <TextField fullWidth label=' Name' variant='outlined' name='name' value={receipt.docClass} onChange={inputChange}
        {...errors.docClass ==='' && { error: true, helperText: errors.docClass }}
        ></TextField>
        <TextField fullWidth label=' Name' variant='outlined' name='name' value={receipt.docDate} onChange={inputChange}
        {...errors.docDate ==='' && { error: true, helperText: errors.docDate }}
        ></TextField>
        <TextField fullWidth label=' Name' variant='outlined' name='name' value={receipt.payType} onChange={inputChange}
        {...errors.payType ==='' && { error: true, helperText: errors.payType }}
        ></TextField>
        <TextField fullWidth label=' Name' variant='outlined' name='name' value={receipt.saleNo} onChange={inputChange}
        {...errors.saleNo ==='' && { error: true, helperText: errors.saleNo }}
        ></TextField>

        
              
      </Grid>
      <Button variant="contained" onClick={save}>Save</Button>
      </form>
      <Button variant="contained" onClick={save}>Save</Button>
      <Button variant="contained" color='error' onClick={cancel}>Cancel</Button>
  </Grid>
    )
}
