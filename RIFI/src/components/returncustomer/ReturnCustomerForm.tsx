import { Button, Grid, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { ReturnCustInput, useCreatReturnCustMutation, useGetReturnCustomerByIdQuery, useUpdatReturnCustMutation } from '../../generated/graphql'
import { useHistory, useParams } from 'react-router-dom'
import { useGetCustomerQuery } from '../../generated/graphql'
import  RetCsub from './RetCsubs'
import AddButton from '../UI/AddButton'
import {TableRow ,TableCell,TableBody} from '@mui/material';
import CustomizeTable from '../UI/CustomizedTable';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import retSsubs from '../Returnsupplier/RetSsubs'


const initstate : ReturnCustInput = {
id:0,

}
const errors={
    customerName:'',
    retCsubs:'',
    retDate:'',
    totalAmount:'',
   
}
export default function ReturnCustForm() {
    const [ReturnCust,setReturnCust] =useState(initstate)
    const [open, setOpen] = useState(false);
    const [index,setIndex]=useState(-1)
    
    const inputChange = (e :any) =>{
        setReturnCust( {...ReturnCust,[e.target.name]:e.target.value})
    }
    const {id} :any =useParams()
    const {data:ReturnCustfetch,isSuccess}=useGetReturnCustomerByIdQuery({id:+id!})
    const[updateTrigger]=useUpdatReturnCustMutation()
    useEffect(()=>{
        if(isSuccess)setReturnCust(ReturnCustfetch?.aReturnCust?.items![0]as ReturnCustInput)
    },[ReturnCustfetch,isSuccess])
    const [triggerCreate]= useCreatReturnCustMutation()
    const validation = (ReturnCust :ReturnCustInput) =>{
        if(ReturnCust.customerName ==='') errors.customerName='Please Insert Customer Name'
        if(ReturnCust.retCsubs ===[]) errors.retCsubs='Please Insert Customer Name'
        if(ReturnCust.retDate ==='') errors.retDate='Please Insert Customer Name'
        if(ReturnCust.totalAmount ==='') errors.totalAmount='Please Insert Customer Name'
        
        
    }
    const history = useHistory()
    const save =() =>{
        if(id){updateTrigger({input:ReturnCust})}else{triggerCreate({input:ReturnCust})}
        history.push('/ReturnCustomer/list')
    }
    
    const cancel =() => {
        history.push('/ReturnCustomer/list')
    }
    return (
  <Grid container>
      <form>
      <Grid item  sm={12}>
        <TextField fullWidth label=' Name' variant='outlined' name='name' value={ReturnCust.customerName} onChange={inputChange}
        {...errors.customerName ==='' && { error: true, helperText: errors.customerName }}
        ></TextField>
        <TextField fullWidth label=' Name' variant='outlined' name='name' value={ReturnCust.retCsubs} onChange={inputChange}
        {...errors.retCsubs ==='' && { error: true, helperText: errors.retCsubs }}
        ></TextField>
        <TextField fullWidth label=' Name' variant='outlined' name='name' value={ReturnCust.retDate} onChange={inputChange}
        {...errors.retDate ==='' && { error: true, helperText: errors.retDate }}
        ></TextField>
        <TextField fullWidth label=' Name' variant='outlined' name='name' value={ReturnCust.totalAmount} onChange={inputChange}
        {...errors.totalAmount ==='' && { error: true, helperText: errors.totalAmount }}
        ></TextField>

<RetCsub open={open} setOpen={setOpen} ReturnCust={ReturnCust} setReturnCust={setReturnCust} idx={index} setIndex={setIndex}></RetCsub>
      <Button variant="contained" onClick={save}>Save</Button>
      <AddButton onClick={()=> setOpen(true)}></AddButton>
        
        <CustomizeTable tableHead={['ID','Contact Name','Mobile1','Mobile2','Action']}>
            <TableBody>
                {ReturnCust?.retCsubs?.map((item,idx) => (
                    <TableRow
                        key={idx}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            {item?.id} 
                        </TableCell>
                        <TableCell align="right">{item?.product}</TableCell>
                        <TableCell align="right">{item?.quntity}</TableCell>
                        <TableCell align="right">{item?.retAccTypr}</TableCell>
                        <TableCell align="right">{item?.retClnk}</TableCell>
                        <TableCell align="right">{item?.retClnkNavigation}</TableCell>
                        <TableCell align="right">{item?.storeNavigation}</TableCell>
                        <TableCell align="right">{item?.store}</TableCell>
                        <TableCell align="right">{item?.totalPrice}</TableCell>
                        <TableCell align="right">{item?.unitPrice}</TableCell>
                       
                        
                    </TableRow>

                ))}
            </TableBody>
        </CustomizeTable>
      </Grid>
      <Button variant="contained" onClick={save}>Save</Button>
      </form>
      <Button variant="contained" onClick={save}>Save</Button>
      <Button variant="contained" color='error' onClick={cancel}>Cancel</Button>
      <AddButton onClick={()=>{
          setOpen(true)
      }}></AddButton>
  </Grid>
    )
}
