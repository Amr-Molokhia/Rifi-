import { Button, Grid, TextField } from '@mui/material'
import produce from '@reduxjs/toolkit/node_modules/immer'
import React, { useEffect, useState } from 'react'
import { AccClassInput, useCreatAccClassMutation, useGetAccClassByIdQuery, useUpdatAccClassMutation } from '../../generated/graphql'
import {  useHistory, useParams } from 'react-router'



const initstate : AccClassInput = {
id:0,

}
const errors={
    cashRecs:'',
    description:'',
    receipts:'',
    type:'',
}
export default function AccessClassForm() {
    const [AccClass,setAccClass] =useState(initstate)
    const inputChange = (e :any) =>{
        setAccClass( {...AccClass,[e.target.name]:e.target.value})
    }
    const {id}:any =useParams()
    const {data:AccClassfetch,isSuccess}=useGetAccClassByIdQuery({id:+id!})
    const[updateTrigger]=useUpdatAccClassMutation()
    useEffect(()=>{
        if(isSuccess)setAccClass(AccClassfetch?.accClass?.items![0] as AccClassInput)
    },[AccClassfetch,isSuccess])
    const [triggerCreate]= useCreatAccClassMutation()
    const validation = (AccClass :AccClassInput) =>{
        if(AccClass.cashRecs===[]) errors.cashRecs='Please Insert Customer Name'
        if(AccClass.description === '') errors.description='Please Enter Mobil'
        if(AccClass.receipts===[]) errors.receipts='Please Insert Customer Name'
        if(AccClass.type === '') errors.type='Please Enter Mobil'
        
    }
    const history = useHistory()
    const save =() =>{
        if(id){updateTrigger({input:AccClass})}else{triggerCreate({input:AccClass})}
        history.push('/AccessClass/list')
    }
    
    const cancel =() => {
        history.push('/AccessClass/list')
    }
    return (
  <Grid container>
      <form>
      <Grid item  sm={12}>
        <TextField fullWidth label=' Name' variant='outlined' name='name' value={AccClass.cashRecs} onChange={inputChange}
        {...errors.cashRecs ==='' && { error: true, helperText: errors.cashRecs }}
        ></TextField>
        <TextField fullWidth label='Address' variant='outlined' name='address' value={AccClass.description} onChange={inputChange}
        {...errors.description ==='' && { error: true, helperText: errors.description }}
        ></TextField>
        <TextField fullWidth label=' Name' variant='outlined' name='name' value={AccClass.receipts} onChange={inputChange}
        {...errors.receipts ==='' && { error: true, helperText: errors.receipts }}
        ></TextField>
        <TextField fullWidth label='Address' variant='outlined' name='address' value={AccClass.type} onChange={inputChange}
        {...errors.type ==='' && { error: true, helperText: errors.type }}
        ></TextField>
        
              
      </Grid>
      <Button variant="contained" onClick={save}>Save</Button>
      </form>
      <Button variant="contained" onClick={save}>Save</Button>
      <Button variant="contained" color='error' onClick={cancel}>Cancel</Button>
  </Grid>
    )
}
