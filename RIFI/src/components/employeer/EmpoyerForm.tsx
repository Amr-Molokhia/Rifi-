import { Button, Grid, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {EmployeeInput, useCreatEmployerMutation, useGetEmployerByIdQuery, useUpdatEmployerMutation, } from '../../generated/graphql'
import {  useHistory, useParams } from 'react-router'
import { useGetCustomerQuery } from '../../generated/graphql'
import CustomerContacts from './EmployerAttendance'
import AddButton from '../UI/AddButton'
import {TableRow ,TableCell,TableBody} from '@mui/material';
import CustomizeTable from '../UI/CustomizedTable';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import EmployerAttendance from './EmployerAttendance'


const initstate : EmployeeInput = {
id:0,

}
const errors={
    address:'',
    attendances:'',
    mobile:'',
    name:'',
    phone:'',
    salarySystem:'',
    salaryValue:'',
    weeklyRepates:'',
    
    
}
export default function EmployerForm() {
    const [employer,setEmployer] =useState(initstate)
    const [open, setOpen] = useState(false);
    const [index,setIndex]=useState(-1)
    
    const inputChange = (e :any) =>{
        setEmployer( {...employer,[e.target.name]:e.target.value})
    }
    const {id}:any =useParams()
    const {data:employerfetch,isSuccess}=useGetEmployerByIdQuery({id:+id!})
    
    const[updateTrigger]=useUpdatEmployerMutation()
    useEffect(()=>{
        if(isSuccess)setEmployer(employerfetch?.aEmployee?.items![0]as EmployeeInput)
    },[employerfetch,isSuccess])

    const [triggerCreate]= useCreatEmployerMutation()
    const validation = (employer :EmployeeInput) =>{
        if(employer.address ==='') errors.address='Please Insert Customer Name'
        if(employer.attendances ===[]) errors.attendances='Please Insert Customer Name'
        if(employer.mobile ==='') errors.mobile='Please Insert Customer Name'
        if(employer.name ==='') errors.name='Please Insert Customer Name'
        if(employer.phone ==='') errors.phone='Please Insert Customer Name'
        if(employer.salarySystem ==='') errors.salarySystem='Please Insert Customer Name'
        if(employer.salaryValue ==='') errors.salaryValue='Please Insert Customer Name'
        if(employer.weeklyRepates ===[]) errors.weeklyRepates='Please Insert Customer Name'
            
    }
    const history = useHistory()
    const save =() =>{
        if(id){updateTrigger({input:employer})}else{triggerCreate({input:employer})}
        history.push('/Employer/list')
    }

  
    const cancel =() => {
        history.push('/Employer/list')
    }
    return (
  <Grid container>
      <form>
      <Grid item  sm={12}>
        <TextField fullWidth label=' Name' variant='outlined' name='name' value={employer.address} onChange={inputChange}
        {...errors.address==='' && { error: true, helperText: errors.address }}
        ></TextField>
        <TextField fullWidth label=' Name' variant='outlined' name='name' value={employer.attendances} onChange={inputChange}
        {...errors.attendances==='' && { error: true, helperText: errors.attendances }}
        ></TextField>
        <TextField fullWidth label=' Name' variant='outlined' name='name' value={employer.mobile} onChange={inputChange}
        {...errors.mobile==='' && { error: true, helperText: errors.mobile }}
        ></TextField>
        <TextField fullWidth label=' Name' variant='outlined' name='name' value={employer.name} onChange={inputChange}
        {...errors.name==='' && { error: true, helperText: errors.name }}
        ></TextField>
        <TextField fullWidth label=' Name' variant='outlined' name='name' value={employer.phone} onChange={inputChange}
        {...errors.phone==='' && { error: true, helperText: errors.phone }}
        ></TextField>
        <TextField fullWidth label=' Name' variant='outlined' name='name' value={employer.salarySystem} onChange={inputChange}
        {...errors.salarySystem==='' && { error: true, helperText: errors.salarySystem }}
        ></TextField>
        <TextField fullWidth label=' Name' variant='outlined' name='name' value={employer.salaryValue} onChange={inputChange}
        {...errors.salaryValue==='' && { error: true, helperText: errors.salaryValue }}
        ></TextField>
        <TextField fullWidth label=' Name' variant='outlined' name='name' value={employer.weeklyRepates} onChange={inputChange}
        {...errors.weeklyRepates==='' && { error: true, helperText: errors.weeklyRepates }}
        ></TextField>

<EmployerAttendance open={open} setOpen={setOpen} employer ={employer} setEmployer={setEmployer} idx={index} setIndex={setIndex}></EmployerAttendance>
      <Button variant="contained" onClick={save}>Save</Button>
      <AddButton onClick={()=> setOpen(true)}></AddButton>
        
        <CustomizeTable tableHead={['ID','Contact Name','Mobile1','Mobile2','Action']}>
            <TableBody>
                {employer?.attendances?.map((item,idx) => (
                    <TableRow
                        key={idx}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            {item?.id}
                        </TableCell>
                        <TableCell align="right">{item?.date}</TableCell>
                        <TableCell align="right">{item?.dcheck}</TableCell>
                        <TableCell align="right">{item?.employee}</TableCell>
                        <TableCell align="right">{item?.employeeNavigation}</TableCell>
                        

                    </TableRow>

                ))}
            </TableBody>
        </CustomizeTable>
                               
      </Grid>
      <Button variant="contained" onClick={save}>Save</Button>
      </form>
      <Button variant="contained" onClick={save}>Save</Button>
      <Button variant="contained" color='error' onClick={cancel}>Cancel</Button>
  </Grid>
    )
}
