import { Button, Grid, TextField } from '@mui/material'
import produce from '@reduxjs/toolkit/node_modules/immer'
import React, { useEffect, useState } from 'react'
import { ProdClassInput, ProductInput, useCreatProductClassMutation, useUpdatProductClassMutation, useGetProductClassByIdQuery } from '../../generated/graphql'
import { useHistory, useParams } from 'react-router'


const initstate : ProdClassInput = {
id:0,

}
const errors={
    description:'',
    classification:'',
    classificationNavigation:'',
    recGsubs:'',
    retSsubs:'',
    salGsubs:'',
    
}
export default function ProductClassForm() {
    const [productClass,setproductClass] =useState(initstate)
    const inputChange = (e :any) =>{
        setproductClass( {...productClass,[e.target.name]:e.target.value})
    }
    const {id} :any=useParams()
    const {data:ProdClassfetch,isSuccess}=useGetProductClassByIdQuery({id:+id!})
    const[updateTrigger]=useUpdatProductClassMutation()
    useEffect(()=>{
        if(isSuccess)setproductClass(ProdClassfetch?.aProdClass?.items![0]as ProdClassInput)
    },[ProdClassfetch,isSuccess])
    const [triggerCreate]= useCreatProductClassMutation()
    const validation = (productClass :ProductInput) =>{
        if(productClass.description ==='') errors.description='Please Insert Customer Name'
        if(productClass.classification ===[]) errors.classification='Please Insert Customer Name'
        if(productClass.classificationNavigation ===[]) errors.classificationNavigation='Please Insert Customer Name'
        if(productClass.recGsubs ===[]) errors.recGsubs='Please Insert Customer Name'
        if(productClass.retSsubs ===[]) errors.retSsubs='Please Insert Customer Name'
        if(productClass.salGsubs ===[]) errors.salGsubs='Please Insert Customer Name'
        
        
            
    }
    const history = useHistory()
    const save =() =>{
        if(id){updateTrigger({input:productClass})}else{triggerCreate({input:productClass})}
        history.push('/ProductClass/list')
    }
    
    const cancel =() => {
        history.push('/ProductClass/list')
    }
    return (
  <Grid container>
      <form>
      <Grid item  sm={12}>
        <TextField fullWidth label=' Name' variant='outlined' name='name' value={productClass.description} onChange={inputChange}
        {...errors.description==='' && { error: true, helperText: errors.description }}
        ></TextField>
        <TextField fullWidth label=' Name' variant='outlined' name='name' value={productClass.products} onChange={inputChange}
        {...errors.products==='' && { error: true, helperText: errors.products }}
        ></TextField>
        
                               
      </Grid>
      <Button variant="contained" onClick={save}>Save</Button>
      </form>
      <Button variant="contained" onClick={save}>Save</Button>
      <Button variant="contained" color='error' onClick={cancel}>Cancel</Button>
  </Grid>
    )
}
