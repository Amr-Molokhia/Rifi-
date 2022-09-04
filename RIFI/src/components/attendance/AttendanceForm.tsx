import { Button, Grid, TextField } from '@mui/material'
import produce from '@reduxjs/toolkit/node_modules/immer'
import React, { useEffect, useState } from 'react'
import { AttendanceInput,  useCreatAttendanceMutation,  useGetAttendanceByIdQuery,  useUpdatAttendanceMutation } from '../../generated/graphql'
import { useHistory, useParams } from 'react-router'


const initstate : AttendanceInput = {
id:0,

}
const errors={
    date:'',
    dcheck:'',
    employee:'',
    employeeNavigation:'',
}
export default function AttendanceForm() {
    const [Attendance,setAttendance] =useState(initstate)
    const inputChange = (e :any) =>{
        setAttendance( {...Attendance,[e.target.name]:e.target.value})
    }
    const {id} :any =useParams()
    const {data:attendancefetch,isSuccess}=useGetAttendanceByIdQuery({id:+id!})
    const[updateTrigger]=useUpdatAttendanceMutation()
    useEffect(()=>{
        if(isSuccess)setAttendance(attendancefetch?.aAttendance?.items![0] as AttendanceInput)
    },[attendancefetch,isSuccess])
    const [triggerCreate]= useCreatAttendanceMutation()
    const validation = (customer :AttendanceInput) =>{
        if(Attendance.date ==='') errors.date='Please Insert Customer Name'
        if(Attendance.dcheck === '') errors.dcheck='Please Enter Mobil'
        if(Attendance.employee ==='') errors.employee='Please Insert Customer Name'
        
    }
    const history = useHistory()
    const save =() =>{
        if(id){updateTrigger({input:Attendance})}else{triggerCreate({input:Attendance})}
        history.push('/Attendancelist')
    }
    
    const cancel =() => {
        history.push('/Attendance/list')
    }

    return (
  <Grid container>
      <form>
      <Grid item  sm={12}>
        <TextField fullWidth label=' Name' variant='outlined' name='name' value={Attendance.date} onChange={inputChange}
        {...errors.date ==='' && { error: true, helperText: errors.date }}
        ></TextField>
        <TextField fullWidth label='Address' variant='outlined' name='address' value={Attendance.dcheck} onChange={inputChange}
        {...errors.dcheck ==='' && { error: true, helperText: errors.dcheck }}
        ></TextField>
        <TextField fullWidth label='Mobile' variant='outlined' name='mobile' value={Attendance.employee} onChange={inputChange}
        {...errors.employee ==='' && { error: true, helperText: errors.employee }}
        ></TextField>
        <TextField fullWidth label='Note' variant='outlined' name='note' value={Attendance.employeeNavigation} onChange={inputChange}
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
