import { Button, Grid, TextField } from '@mui/material'
import produce from '@reduxjs/toolkit/node_modules/immer'
import React, { useEffect, useState } from 'react'
import { BankInput, useCreatBankMutation, useGetBankByIdQuery, useUpdatBankMutation } from '../../generated/graphql'
import {  useHistory, useParams } from 'react-router'



const initstate : BankInput = {
id:0,

}
const errors={
    account:'',
    name:'',
    
}
export default function BankForm() {
    const [Bank,setBank] =useState(initstate)
    const inputChange = (e :any) =>{
        setBank( {...Bank,[e.target.name]:e.target.value})
    }
    const {id}:any =useParams()
    const {data:Bankfetch,isSuccess}=useGetBankByIdQuery({id:+id!})
    const[updateTrigger]=useUpdatBankMutation()
    useEffect(()=>{
        if(isSuccess)setBank(Bankfetch?.aBank?.items![0] as BankInput)
    },[Bankfetch,isSuccess])
    const [triggerCreate]= useCreatBankMutation()
    const validation = (Bank :BankInput) =>{
        if(Bank.account ==='') errors.account='Please Insert Customer Name'
        if(Bank.name === '') errors.name='Please Enter Mobil'
        
    }
    const history = useHistory()
    const save =() =>{
        if(id){updateTrigger({input:Bank})}else{triggerCreate({input:Bank})}
        history.push('/Bank/list')
    }
    
    const cancel =() => {
        history.push('/Bank/list')
    }
    return (
  <Grid container>
      <form>
      <Grid item  sm={12}>
        <TextField fullWidth label=' Name' variant='outlined' name='name' value={Bank.account} onChange={inputChange}
        {...errors.account ==='' && { error: true, helperText: errors.account }}
        ></TextField>
        <TextField fullWidth label='Address' variant='outlined' name='address' value={Bank.name} onChange={inputChange}
        {...errors.name ==='' && { error: true, helperText: errors.name }}
        ></TextField>
        
              
      </Grid>
      <Button variant="contained" onClick={save}>Save</Button>
      </form>
      <Button variant="contained" onClick={save}>Save</Button>
      <Button variant="contained" color='error' onClick={cancel}>Cancel</Button>
  </Grid>
    )
}
