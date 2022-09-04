import { Button, Grid, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { CustomerInput,ReturnSuppInput,useCreatCustomerMutation,useCreatReturnSuppMutation,useGetReturnSupportByIdQuery,useUpdatCustomerMutation, useUpdatReturnSuppMutation } from '../../generated/graphql'
import {  useHistory, useParams } from 'react-router'
import { useGetCustomerQuery } from '../../generated/graphql'
import retSsubs from './RetSsubs'
import AddButton from '../UI/AddButton'
import {TableRow ,TableCell,TableBody} from '@mui/material';
import CustomizeTable from '../UI/CustomizedTable';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";
import RetSsubs from './RetSsubs'


const initstate : ReturnSuppInput = {
id:0,

}
const errors={
    supplierName:'',
    retCsubs:'',
    retDate:'',
    totalAmount:'',
   
}
export default function ReturnSuppForm() {
    const [ReturnSupp,setReturnSupp] =useState(initstate)
    const [open, setOpen] = useState(false);
    const [index,setIndex]=useState(-1)

    const inputChange = (e :any) =>{
        setReturnSupp( {...ReturnSupp,[e.target.name]:e.target.value})
    }
    const {id} :any=useParams()
    const {data:ReturnSuppfetch,isSuccess}=useGetReturnSupportByIdQuery({id:+id!})
    const[updateTrigger]=useUpdatReturnSuppMutation()
    useEffect(()=>{
        if(isSuccess)setReturnSupp(ReturnSuppfetch?.aReturnSupp?.items![0] as ReturnSuppInput)
    },[ReturnSuppfetch,isSuccess])
    const [triggerCreate]= useCreatReturnSuppMutation()
    const validation = (uright :ReturnSuppInput) =>{
        if(ReturnSupp.supplierName ==='') errors.supplierName='Please Insert Customer Name'
        if(ReturnSupp.retSsubs ===[]) errors.retCsubs='Please Insert Customer Name'
        if(ReturnSupp.retDate ==='') errors.retDate='Please Insert Customer Name'
        if(ReturnSupp.totalAmount ==='') errors.totalAmount='Please Insert Customer Name'
        
        
    }
    const history = useHistory()
    const save =() =>{
        if(id){updateTrigger({input:ReturnSupp})}else{triggerCreate({input:ReturnSupp})}
        history.push('/ReturnSupp/list')
    }
    
    const cancel =() => {
        history.push('/ReturnSupp/list')
    }
    return (
  <Grid container>
      <form>
      <Grid item  sm={12}>
        <TextField fullWidth label=' Name' variant='outlined' name='name' value={ReturnSupp.supplierName} onChange={inputChange}
        {...errors.supplierName ==='' && { error: true, helperText: errors.supplierName }}
        ></TextField>
        <TextField fullWidth label=' Name' variant='outlined' name='name' value={ReturnSupp.retSsubs} onChange={inputChange}
        {...errors.retCsubs ==='' && { error: true, helperText: errors.retCsubs }}
        ></TextField>
        <TextField fullWidth label=' Name' variant='outlined' name='name' value={ReturnSupp.retDate} onChange={inputChange}
        {...errors.retDate ==='' && { error: true, helperText: errors.retDate }}
        ></TextField>
        <TextField fullWidth label=' Name' variant='outlined' name='name' value={ReturnSupp.totalAmount} onChange={inputChange}
        {...errors.totalAmount ==='' && { error: true, helperText: errors.totalAmount }}
        ></TextField>
        
        <RetSsubs open={open} setOpen={setOpen} ReturnSupp={ReturnSupp} setReturnSupp={setReturnSupp} idx={index} setIndex={setIndex}></RetSsubs>
      <Button variant="contained" onClick={save}>Save</Button>
      <AddButton onClick={()=> setOpen(true)}></AddButton>

        <CustomizeTable tableHead={['ID','Contact Name','Mobile1','Mobile2','Action']}>
            <TableBody>
                {ReturnSupp?.retSsubs?.map((item,idx) => (
                    <TableRow
                        key={idx}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            {item?.id} 
                        </TableCell>
                        <TableCell align="right">{item?.product}</TableCell>
                        <TableCell align="right">{item?.produnit}</TableCell>
                        <TableCell align="right">{item?.quntity}</TableCell>
                        <TableCell align="right">{item?.retAccTypr}</TableCell>
                        <TableCell align="right">{item?.storeNavigation}</TableCell>
                        <TableCell align="right">{item?.retSlnk}</TableCell>
                        <TableCell align="right">{item?.retSlnkNavigation}</TableCell>
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

  </Grid>
    )
}
