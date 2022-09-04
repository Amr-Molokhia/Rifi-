import { Button, Grid, TextField } from '@mui/material'
import produce from '@reduxjs/toolkit/node_modules/immer'
import React, { useEffect, useState } from 'react'
import { UrightInput, useCreatRightMutation, useGetUrightByIdQuery, useUpdatRightMutation } from '../../generated/graphql'
import {  useHistory, useParams } from 'react-router'


const initstate : UrightInput = {
id:0,

}
const errors={
    password:'',
    username:'',
    s01:'',
    s02:'',
    s03:'',
    s04:'',
    s05:'',
    s06:'',
}
export default function UrightForm() {
    const [Uright,setUright] =useState(initstate)
    const inputChange = (e :any) =>{
        setUright( {...Uright,[e.target.name]:e.target.value})
    }
    const {id} :any =useParams()
    const {data:Urightfetch,isSuccess}=useGetUrightByIdQuery({id:+id!})
    const[updateTrigger]=useUpdatRightMutation()
    useEffect(()=>{
        if(isSuccess)setUright(Urightfetch?.uright?.items![0] as UrightInput)
    },[Urightfetch,isSuccess])
    const [triggerCreate]= useCreatRightMutation()
    const validation = (uright :UrightInput) =>{
        if(uright.password ==='') errors.password='Please Insert Customer Name'
        if(uright.username ==='') errors.username='Please Insert Customer Name'
        if(uright.s01 ==='') errors.s01='Please Insert Customer Name'
        if(uright.s02 ==='') errors.s02='Please Insert Customer Name'
        if(uright.s03 ==='') errors.s03='Please Insert Customer Name'
        if(uright.s04 ==='') errors.s04='Please Insert Customer Name'
        if(uright.s05 ==='') errors.s05='Please Insert Customer Name'
        if(uright.s06 ==='') errors.s06='Please Insert Customer Name'
        
    }
    const history = useHistory()
    const save =() =>{
        if(id){updateTrigger({input:Uright})}else{triggerCreate({input:Uright})}
        history.push('/Uright/list')
    }
    
    const cancel =() => {
        history.push('/Uright/list')
    }
    return (
  <Grid container>
      <form>
      <Grid item  sm={12}>
        <TextField fullWidth label=' Name' variant='outlined' name='name' value={Uright.password} onChange={inputChange}
        {...errors.password ==='' && { error: true, helperText: errors.password }}
        ></TextField>
         <TextField fullWidth label=' Name' variant='outlined' name='name' value={Uright.username} onChange={inputChange}
        {...errors.username ==='' && { error: true, helperText: errors.username }}
        ></TextField>
         <TextField fullWidth label=' Name' variant='outlined' name='name' value={Uright.s01} onChange={inputChange}
        {...errors.s01 ==='' && { error: true, helperText: errors.s01 }}
        ></TextField>
         <TextField fullWidth label=' Name' variant='outlined' name='name' value={Uright.s02} onChange={inputChange}
        {...errors.s02 ==='' && { error: true, helperText: errors.s02 }}
        ></TextField>
         <TextField fullWidth label=' Name' variant='outlined' name='name' value={Uright.s03} onChange={inputChange}
        {...errors.s03 ==='' && { error: true, helperText: errors.s03 }}
        ></TextField>
         <TextField fullWidth label=' Name' variant='outlined' name='name' value={Uright.s04} onChange={inputChange}
        {...errors.s04 ==='' && { error: true, helperText: errors.s04 }}
        ></TextField>
         <TextField fullWidth label=' Name' variant='outlined' name='name' value={Uright.s05} onChange={inputChange}
        {...errors.s05 ==='' && { error: true, helperText: errors.s05 }}
        ></TextField>
         <TextField fullWidth label=' Name' variant='outlined' name='name' value={Uright.s06} onChange={inputChange}
        {...errors.s06 ==='' && { error: true, helperText: errors.s06 }}
        ></TextField>
        
        
      </Grid>
      <Button variant="contained" onClick={save}>Save</Button>
      </form>
      <Button variant="contained" onClick={save}>Save</Button>
      <Button variant="contained" color='error' onClick={cancel}>Cancel</Button>

  </Grid>
    )
}
