import { Button, Grid, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { SupplierInput,useCreatSupplierMutation,useGetSupplierByIdQuery,useUpdatCustomerMutation, useUpdatSupplierMutation } from '../../generated/graphql'
import {  useHistory, useParams } from 'react-router'
import { useGetCustomerQuery } from '../../generated/graphql'
import SupplierContacts from './SupplierContacts'
import AddButton from '../UI/AddButton'
import {TableRow ,TableCell,TableBody} from '@mui/material';
import CustomizeTable from '../UI/CustomizedTable';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const initstate : SupplierInput= {
id:0,

}
const errors={
    address:'',
    contacts:'',
    mobile:'',
    name:'',
    note:'',
    phone:'',
    
    
}
export default function SupplierForm() {
    const [Supplier,setSupplier] =useState(initstate)
    const [open, setOpen] = useState(false);
    const [index,setIndex]=useState(-1)

    const inputChange = (e :any) =>{
        setSupplier( {...Supplier,[e.target.name]:e.target.value})
    }
    const {id} :any=useParams()
    const {data:Supplierfetch,isSuccess}=useGetSupplierByIdQuery({id:+id!})
    const[updateTrigger]=useUpdatSupplierMutation()
    useEffect(()=>{
        if(isSuccess)setSupplier(Supplierfetch?.aSupplier?.items![0] as SupplierInput)
    },[Supplierfetch,isSuccess])
    const [triggerCreate]= useCreatSupplierMutation()
    const validation = (supplier :SupplierInput) =>{
        if(supplier.address ==='') errors.address='Please Insert Customer Name'
        if(supplier.mobile ==='') errors.mobile='Please Insert Customer Name'
        if(supplier.name ==='') errors.name='Please Insert Customer Name'
        if(supplier.phone ==='') errors.phone='Please Insert Customer Name'
        if(supplier.contacts ===[]) errors.contacts='Please Insert Customer Name'
        if(supplier.note ===[]) errors.contacts='Please Insert Customer Name'
        
    }
    const history = useHistory()
    const save =() =>{
        if(id){updateTrigger({input:Supplier})}else{triggerCreate({input:Supplier})}
        
    }
    
    const cancel =() => {
        history.push('/Customer/list')
    }
    return (
  <Grid container>
      <form>
      <Grid item  sm={12}>
      <TextField fullWidth label=' Name' variant='outlined' name='name' value={Supplier.address} onChange={inputChange}
        {...errors.address ==='' && { error: true, helperText: errors.address }}
        ></TextField>
        <TextField fullWidth label=' Name' variant='outlined' name='name' value={Supplier.contacts} onChange={inputChange}
        {...errors.contacts ==='' && { error: true, helperText: errors.contacts }}
        ></TextField>
        <TextField fullWidth label=' Name' variant='outlined' name='name' value={Supplier.mobile} onChange={inputChange}
        {...errors.mobile ==='' && { error: true, helperText: errors.mobile }}
        ></TextField>
        <TextField fullWidth label=' Name' variant='outlined' name='name' value={Supplier.name} onChange={inputChange}
        {...errors.name ==='' && { error: true, helperText: errors.name }}
        ></TextField>
        <TextField fullWidth label=' Name' variant='outlined' name='name' value={Supplier.note} onChange={inputChange}
        {...errors.note ==='' && { error: true, helperText: errors.note }}
        ></TextField>
        <TextField fullWidth label=' Name' variant='outlined' name='name' value={Supplier.phone} onChange={inputChange}
        {...errors.phone ==='' && { error: true, helperText: errors.phone }}
        ></TextField>
        </Grid>
      <Button variant="contained" onClick={save}>Save</Button>
      </form>
      <SupplierContacts open={open} setOpen={setOpen} Supplier={Supplier} setSupplier={setSupplier} idx={index} setIndex={setIndex}></SupplierContacts>
      

      <AddButton onClick={()=> setOpen(true)}></AddButton>

      <CustomizeTable tableHead={['ID','Contact Name','Mobile1','Mobile2','Action']}>
            <TableBody>
                {Supplier?.contacts?.map((item,idx) => (
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
                        

                    </TableRow>

                ))}
            </TableBody>
        </CustomizeTable>
      <Button variant="contained" onClick={save}>Save</Button>
      <Button variant="contained" color='error' onClick={cancel}>Cancel</Button>

  </Grid>
    )
}
