import { Button, Grid, TextField } from '@mui/material'
import produce from '@reduxjs/toolkit/node_modules/immer'
import React, { useEffect, useState } from 'react'
import { useCreatWeaklyReapateMutation, useGetWeaklyReapateByIdQuery, useUpdatWeaklyReapateMutation, WeeklyRepateInput } from '../../generated/graphql'
import {  useHistory, useParams } from 'react-router'


const initstate : WeeklyRepateInput = {
id:0,

}
const errors={
    date:'',
    rebate:'',
    employee:'',
    employeeNavigation:'',
}
export default function WeeklyRepateForm() {
    const [WeeklyRepate,setWeeklyRepate] =useState(initstate)
    const inputChange = (e :any) =>{
        setWeeklyRepate( {...WeeklyRepate,[e.target.name]:e.target.value})
    }
    const {id}:any =useParams()
    const {data:WeeklyRepateefetch,isSuccess}=useGetWeaklyReapateByIdQuery({id:+id!})
    const[updateTrigger]=useUpdatWeaklyReapateMutation()
    useEffect(()=>{
        if(isSuccess)setWeeklyRepate(WeeklyRepateefetch?.aWeeklyRepate?.items![0]as WeeklyRepateInput)
    },[WeeklyRepateefetch,isSuccess])
    const [triggerCreate]= useCreatWeaklyReapateMutation()
    const validation = (WeeklyRepate :WeeklyRepateInput) =>{
        if(WeeklyRepate.date ==='') errors.date='Please Insert Customer Name'
        if(WeeklyRepate.employee ==='') errors.employee='Please Insert Customer Name'
        
    }
    const history = useHistory()
    const save =() =>{
        if(id){updateTrigger({input:WeeklyRepate})}else{triggerCreate({input:WeeklyRepate})}
        history.push('/WeaklyReapeat/list')
    }
    
    const cancel =() => {
        history.push('/WeaklyReapeat/list')
    }
    return (
  <Grid container>
      <form>
      <Grid item  sm={12}>
        <TextField fullWidth label=' Name' variant='outlined' name='name' value={WeeklyRepate.date} onChange={inputChange}
        {...errors.date ==='' && { error: true, helperText: errors.date }}
        ></TextField>
        <TextField fullWidth label='Address' variant='outlined' name='address' value={WeeklyRepate.rebate} onChange={inputChange}
        {...errors.rebate ==='' && { error: true, helperText: errors.rebate }}
        ></TextField>
        <TextField fullWidth label='Mobile' variant='outlined' name='mobile' value={WeeklyRepate.employee} onChange={inputChange}
        {...errors.employee ==='' && { error: true, helperText: errors.employee }}
        ></TextField>
        <TextField fullWidth label='Note' variant='outlined' name='note' value={WeeklyRepate.employeeNavigation} onChange={inputChange}
        {...errors.employeeNavigation ==='' && { error: true, helperText: errors.employeeNavigation }}>
        </TextField>
              
      </Grid>
      <Button variant="contained" onClick={save}>Save</Button>
      </form>
      <Button variant="contained" onClick={save}>Save</Button>
      <Button variant="contained" color='error' onClick={cancel}>Cancel</Button>

  </Grid>
    )
}
