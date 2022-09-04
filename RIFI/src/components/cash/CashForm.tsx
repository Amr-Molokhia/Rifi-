import { Button, Grid, TextField } from '@mui/material'
import produce from '@reduxjs/toolkit/node_modules/immer'
import React, { useEffect, useState } from 'react'
import { CashRecInput, useCreateCashMutation, useGetCashByIdQuery, useUpdateCashMutation,  } from '../../generated/graphql'
import {  useHistory, useParams } from 'react-router'


const initstate : CashRecInput = {
id:0,

}
const errors={
    amount:'',
    bankAccount:'',
    bankName:'',
    checkDate:'',
    checkno:'',
    docClass:'',
    docDate:'',
    payType:'',
    reciveNo:'',
    supplierName:'',
    
}
export default function CashForm() {
    const [cash,setCash] =useState(initstate)
    const inputChange = (e :any) =>{
        setCash( {...cash,[e.target.name]:e.target.value})
    }
    const {id} :any=useParams()
    const {data:cashfetch,isSuccess}=useGetCashByIdQuery({id:+id!})
    const[updateTrigger]=useUpdateCashMutation()
    useEffect(()=>{
        if(isSuccess)setCash(cashfetch?.aCashRec?.items![0] as CashRecInput)
    },[cashfetch,isSuccess])
    const [triggerCreate]= useCreateCashMutation()
    const validation = (cash :CashRecInput) =>{
        if(cash.amount ==='') errors.amount='Please Insert Customer Name'
        if(cash.bankAccount === '') errors.bankAccount='Please Enter Mobil'
        if(cash.bankName ==='') errors.bankName='Please Insert Customer Name'
        if(cash.checkDate === '') errors.checkDate='Please Enter Mobil'
        if(cash.checkno ==='') errors.checkno='Please Insert Customer Name'
        if(cash.docClass === '') errors.docClass='Please Enter Mobil'
        if(cash.docDate ==='') errors.docDate='Please Insert Customer Name'
        if(cash.payType === '') errors.payType='Please Enter Mobil'
        if(cash.reciveNo ==='') errors.reciveNo='Please Insert Customer Name'
        if(cash.supplierName === '') errors.supplierName='Please Enter Mobil'
        
    }
    const history = useHistory()
    const save =() =>{
        if(id){updateTrigger({input:cash})}else{triggerCreate({input:cash})}
        history.push('/Cash/list')
    }
    
    const cancel =() => {
        history.push('/Cash/list')
    }
    return (
  <Grid container>
      <form>
      <Grid item  sm={12}>
        <TextField fullWidth label=' Name' variant='outlined' name='name' value={cash.amount} onChange={inputChange}
        {...errors.amount ==='' && { error: true, helperText: errors.amount }}
        ></TextField>
        <TextField fullWidth label='Address' variant='outlined' name='address' value={cash.bankAccount} onChange={inputChange}
        {...errors.bankAccount ==='' && { error: true, helperText: errors.bankAccount }}
        ></TextField>
        <TextField fullWidth label='Mobile' variant='outlined' name='mobile' value={cash.bankName} onChange={inputChange}
        {...errors.bankName ==='' && { error: true, helperText: errors.bankName }}
        ></TextField>
        <TextField fullWidth label='Note' variant='outlined' name='note' value={cash.checkDate} onChange={inputChange}
        {...errors.checkDate ==='' && { error: true, helperText: errors.checkDate }}>
        </TextField>
        <TextField fullWidth label='LandLine' variant='outlined' name='phone' value={cash.checkno} onChange={inputChange}
        {...errors.checkno ==='' && { error: true, helperText: errors.checkno }}>
        </TextField> 
        <TextField fullWidth label='LandLine' variant='outlined' name='phone' value={cash.docClass} onChange={inputChange}
        {...errors.docClass ==='' && { error: true, helperText: errors.docClass }}>
        </TextField>
        <TextField fullWidth label=' Name' variant='outlined' name='name' value={cash.docDate} onChange={inputChange}
        {...errors.docDate ==='' && { error: true, helperText: errors.docDate }}
        ></TextField>
        <TextField fullWidth label='Address' variant='outlined' name='address' value={cash.payType} onChange={inputChange}
        {...errors.payType ==='' && { error: true, helperText: errors.payType }}
        ></TextField>
        <TextField fullWidth label='Mobile' variant='outlined' name='mobile' value={cash.reciveNo} onChange={inputChange}
        {...errors.reciveNo ==='' && { error: true, helperText: errors.reciveNo }}
        ></TextField>
        <TextField fullWidth label='Note' variant='outlined' name='note' value={cash.supplierName} onChange={inputChange}
        {...errors.supplierName ==='' && { error: true, helperText: errors.supplierName }}>
        </TextField>
                               
      </Grid>
      <Button variant="contained" onClick={save}>Save</Button>
      </form>
      <Button variant="contained" onClick={save}>Save</Button>
      <Button variant="contained" color='error' onClick={cancel}>Cancel</Button>
  </Grid>
    )
}
