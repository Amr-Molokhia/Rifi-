import { Button, Grid, TextField } from '@mui/material'
import produce from '@reduxjs/toolkit/node_modules/immer'
import React, { useEffect, useState } from 'react'
import { ProductInput, useCreatProductMutation, useGetProductByIdQuery, useUpdatProductMutation } from '../../generated/graphql'
import {  useHistory, useParams } from 'react-router'



const initstate : ProductInput = {
id:0,

}
const errors={
    account:'',
    name:'',
    
}
export default function ProductForm() {
    const [Product,setProduct] =useState(initstate)
    const inputChange = (e :any) =>{
        setProduct( {...Product,[e.target.name]:e.target.value})
    }
    const {id}:any =useParams()
    const {data:Productfetch,isSuccess}=useGetProductByIdQuery({id:+id!})
    const[updateTrigger]=useUpdatProductMutation()
    useEffect(()=>{
        if(isSuccess)setProduct(Productfetch?.aProduct?.items![0] as ProductInput)
    },[Productfetch,isSuccess])
    const [triggerCreate]= useCreatProductMutation()
    const validation = (product :ProductInput) =>{
        if(Product.description==='') errors.name='Please Insert Customer Name'
        
        
        
    }
    const history = useHistory()
    const save =() =>{
        if(id){updateTrigger({input:Product})}else{triggerCreate({input:Product})}
        history.push('/AccessClass/list')
    }
    
    const cancel =() => {
        history.push('/AccessClass/list')
    }
    return (
  <Grid container>
      <form>
      <Grid item  sm={12}>
        <TextField fullWidth label=' Name' variant='outlined' name='name' value={Product.classification} onChange={inputChange}
        {...errors.account ==='' && { error: true, helperText: errors.account }}
        ></TextField>
        <TextField fullWidth label='Address' variant='outlined' name='address' value={Product.description} onChange={inputChange}
        {...errors.name ==='' && { error: true, helperText: errors.name }}
        ></TextField>
        <TextField fullWidth label=' Name' variant='outlined' name='name' value={Product.classificationNavigation} onChange={inputChange}
        {...errors.account ==='' && { error: true, helperText: errors.account }}
        ></TextField>
        
              
      </Grid>
      <Button variant="contained" onClick={save}>Save</Button>
      </form>
      <Button variant="contained" onClick={save}>Save</Button>
      <Button variant="contained" color='error' onClick={cancel}>Cancel</Button>
  </Grid>
    )
}
