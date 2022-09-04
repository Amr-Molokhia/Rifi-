import { Button, Grid, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { CustomerInput,useCreatCustomerMutation,useUpdatCustomerMutation } from '../../generated/graphql'
import { useNavigate, useParams } from 'react-router'
import { useGetCustomerQuery } from '../../generated/graphql'
import CustomerContacts from './CustomerContacts'
import AddButton from '../UI/AddButton'
import {TableRow ,TableCell,TableBody} from '@mui/material';
import CustomizeTable from '../UI/CustomizedTable';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";

const initstate : CustomerInput = {
id:0,

}
const errors={
name:'',
mobile:''
}
export default function CustomerForm() {
    const [customer,setCustomer] =useState(initstate)
    const [open, setOpen] = useState(false);

    const inputChange = (e :any) =>{
        setCustomer( {...customer,[e.target.name]:e.target.value})
    }
    const {id} :any=useParams()
    const {data:customerfetch,isSuccess}=useGetCustomerQuery({id:+id!})
    
    const[updateTrigger]=useUpdatCustomerMutation()
    useEffect(()=>{        
        if(isSuccess){
            setCustomer( customerfetch?.aCustomer?.items![0] as CustomerInput)
        }
    },[customerfetch,isSuccess])
    const [triggerCreate]= useCreatCustomerMutation()
    const validation = (customer :CustomerInput) =>{
        if(customer.name ==='') errors.name='Please Insert Customer Name'
        if(customer.mobile === '') errors.mobile='Please Enter Mobil'
    }
    const save =() =>{
        if(id){updateTrigger({input:customer})}else{triggerCreate({input:customer})}
        
    }
    return (
  <Grid container>
      <form>
      <Grid item  sm={12}>
        <TextField fullWidth label=' Name' variant='outlined' name='name' value={customer.name} onChange={inputChange}
        {...errors.name ==='' && { error: true, helperText: errors.name }}

        ></TextField>
        <TextField fullWidth label='Address' variant='outlined' name='address' value={customer.address} onChange={inputChange}></TextField>
        <TextField fullWidth label='Mobile' variant='outlined' name='mobile' value={customer.mobile} onChange={inputChange}
        {...errors.mobile ==='' && { error: true, helperText: errors.mobile }}

        ></TextField>
        <TextField fullWidth label='Note' variant='outlined' name='note' value={customer.note} onChange={inputChange}></TextField>
        <TextField fullWidth label='LandLine' variant='outlined' name='phone' value={customer.note} onChange={inputChange}></TextField>        
      </Grid>
      </form>
      <CustomerContacts open={open} setOpen={setOpen} customer={customer} setCustomer={setCustomer} idx={}></CustomerContacts>
      <Button variant="contained" onClick={save}>Save</Button>
      <AddButton onClick={()=> setOpen(true)}></AddButton>

      <CustomizeTable tableHead={['ID','Contact Name','Mobile1','Mobile2','Action']}>
            <TableBody>
                {customer?.contacts?.map((item,idx) => (
                    <TableRow
                        key={idx}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            {item?.id}
                        </TableCell>
                        <TableCell align="right">{item?.name}</TableCell>
                        <TableCell align="right">{item?.mobile}</TableCell>
                        <TableCell align="right">{item?.mobile2}</TableCell>
                        <TableCell>
                        <Link to={`/customers/update/${customer?.comaid}`}>
                                    <EditIcon ></EditIcon>
                                </Link>
                                <DeleteIcon color='error' ></DeleteIcon>
                            </TableCell>

                    </TableRow>

                ))}
            </TableBody>
        </CustomizeTable>
  </Grid>
    )
}
