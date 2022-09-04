import { Button, Grid, TextField } from '@mui/material'
import produce from '@reduxjs/toolkit/node_modules/immer'
import React, { useEffect, useState } from 'react'
import { StoreInput, useCreatStoreMutation, useGetStoreByIdQuery, useUpdatStoreMutation } from '../../generated/graphql'
import { useHistory, useParams } from 'react-router'
import { store } from '../../redux/store'


const initstate : StoreInput= {
id:0,

}
const errors={
    description:'',
    location:'',
    recGsubs:'',
    retCsubs:'',
    retSsubs:'',
    salGsubs:'',
    
    
}
export default function StoreForm() {
    const [Store,setStore] =useState(initstate)
    const inputChange = (e :any) =>{
        setStore( {...Store,[e.target.name]:e.target.value})
    }
    const {id} :any =useParams()
    const {data:Storefetch,isSuccess}=useGetStoreByIdQuery({id:+id!})
    const[updateTrigger]=useUpdatStoreMutation()
    useEffect(()=>{
        if(isSuccess)setStore(Storefetch?.aStore?.items![0] as StoreInput)
    },[Storefetch,isSuccess])
    const [triggerCreate]= useCreatStoreMutation()
    const validation = (store :StoreInput) =>{
        if(Store.description ==='') errors.description='Please Insert Customer Name'
        if(Store.location ==='') errors.location='Please Insert Customer Name'
        if(Store.recGsubs ===[]) errors.recGsubs='Please Insert Customer Name'
        
        if(Store.retSsubs ===[]) errors.retSsubs='Please Insert Customer Name'
        if(Store.salGsubs ===[]) errors.salGsubs='Please Insert Customer Name'
        
    }
    const history = useHistory()
    const save =() =>{
        if(id){updateTrigger({input:Store})}else{triggerCreate({input:Store})}
        history.push('/Store/list')
    }
    
    const cancel =() => {
        history.push('/Store/list')
    }
    return (
  <Grid container>
      <form>
      <Grid item  sm={12}>
      <TextField fullWidth label=' Name' variant='outlined' name='name' value={Store.description} onChange={inputChange}
        {...errors.description ==='' && { error: true, helperText: errors.description }}
        ></TextField>
        <TextField fullWidth label=' Name' variant='outlined' name='name' value={Store.location} onChange={inputChange}
        {...errors.location ==='' && { error: true, helperText: errors.location }}
        ></TextField>
        <TextField fullWidth label=' Name' variant='outlined' name='name' value={Store.recGsubs} onChange={inputChange}
        {...errors.recGsubs ==='' && { error: true, helperText: errors.recGsubs }}
        ></TextField>
        <TextField fullWidth label=' Name' variant='outlined' name='name' value={Store.retSsubs} onChange={inputChange}
        {...errors.retCsubs ==='' && { error: true, helperText: errors.retCsubs }}
        ></TextField>
        <TextField fullWidth label=' Name' variant='outlined' name='name' value={Store.retSsubs} onChange={inputChange}
        {...errors.retSsubs ==='' && { error: true, helperText: errors.retSsubs }}
        ></TextField>
        <TextField fullWidth label=' Name' variant='outlined' name='name' value={Store.salGsubs} onChange={inputChange}
        {...errors.salGsubs ==='' && { error: true, helperText: errors.salGsubs }}
        ></TextField>
        </Grid>
      <Button variant="contained" onClick={save}>Save</Button>
      </form>
      <Button variant="contained" onClick={save}>Save</Button>
      <Button variant="contained" color='error' onClick={cancel}>Cancel</Button>

  </Grid>
    )
}
