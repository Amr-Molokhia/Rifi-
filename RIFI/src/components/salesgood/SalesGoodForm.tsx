import { Button, Grid, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { SalesGoodInput, useCreatSalesGoodMutation, useGetSalesGoodByIdQuery, useUpdateSalesGoodMutation } from '../../generated/graphql'
import {  useHistory, useParams } from 'react-router'
import { useGetCustomerQuery } from '../../generated/graphql'
import salGsubs from './SalGsubs'
import AddButton from '../UI/AddButton'
import {TableRow ,TableCell,TableBody} from '@mui/material';
import CustomizeTable from '../UI/CustomizedTable';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";
import SalGsubs from './SalGsubs'


const initstate : SalesGoodInput= {
id:0,

}
const errors={
    discount:'',
    customerName:'',
    salGsubs:'',
    saleDate:'',
    total:'',
    totalAmount:'',
    
    
}
export default function SalesGoodForm() {
    const [SalesGood,setSalesGood] =useState(initstate)
    const [open, setOpen] = useState(false);
    const [index,setIndex]=useState(-1)

    const inputChange = (e :any) =>{
        setSalesGood( {...SalesGood,[e.target.name]:e.target.value})
    }
    const {id} :any =useParams()
    const {data:SalesGoodfetch,isSuccess}=useGetSalesGoodByIdQuery({id:+id!})
    const[updateTrigger]=useUpdateSalesGoodMutation()
    useEffect(()=>{
        if(isSuccess)setSalesGood(SalesGoodfetch?.aSalesGood?.items![0]as SalesGoodInput)
    },[SalesGoodfetch,isSuccess])
    const [triggerCreate]= useCreatSalesGoodMutation()
    const validation = (salesGood :SalesGoodInput) =>{
        if(salesGood.discount ==='') errors.discount='Please Insert Customer Name'
        if(salesGood.customerName ==='') errors.customerName='Please Insert Customer Name'
        if(salesGood.salGsubs ===[]) errors.salGsubs='Please Insert Customer Name'
        if(salesGood.saleDate ==='') errors.saleDate='Please Insert Customer Name'
        if(salesGood.total ==='') errors.total='Please Insert Customer Name'
        if(salesGood.totalAmount ==='') errors.totalAmount='Please Insert Customer Name'
        
    }
    const history = useHistory()
    const save =() =>{
        if(id){updateTrigger({input:SalesGood})}else{triggerCreate({input:SalesGood})}
        history.push('/SalesGood/list')
    }
  
    const cancel =() => {
        history.push('/SalesGood/list')
    }
    return (
  <Grid container>
      <form>
      <Grid item  sm={12}>
      <TextField fullWidth label=' Name' variant='outlined' name='name' value={SalesGood.discount} onChange={inputChange}
        {...errors.discount ==='' && { error: true, helperText: errors.discount }}
        ></TextField>
        <TextField fullWidth label=' Name' variant='outlined' name='name' value={SalesGood.customerName} onChange={inputChange}
        {...errors.customerName ==='' && { error: true, helperText: errors.customerName }}
        ></TextField>
        <TextField fullWidth label=' Name' variant='outlined' name='name' value={SalesGood.salGsubs} onChange={inputChange}
        {...errors.salGsubs ==='' && { error: true, helperText: errors.salGsubs }}
        ></TextField>
        <TextField fullWidth label=' Name' variant='outlined' name='name' value={SalesGood.saleDate} onChange={inputChange}
        {...errors.saleDate ==='' && { error: true, helperText: errors.saleDate }}
        ></TextField>
        <TextField fullWidth label=' Name' variant='outlined' name='name' value={SalesGood.totalAmount} onChange={inputChange}
        {...errors.totalAmount ==='' && { error: true, helperText: errors.totalAmount }}
        ></TextField>
        <TextField fullWidth label=' Name' variant='outlined' name='name' value={SalesGood.total} onChange={inputChange}
        {...errors.total ==='' && { error: true, helperText: errors.total }}
        ></TextField>
        </Grid>
      <Button variant="contained" onClick={save}>Save</Button>
      </form>

      <SalGsubs open={open} setOpen={setOpen} SalesGood={SalesGood} setSalesGood={setSalesGood} idx={index} setIndex={setIndex}></SalGsubs>
      <Button variant="contained" onClick={save}>Save</Button>
      <AddButton onClick={()=> setOpen(true)}></AddButton>
      <Button variant="contained" onClick={save}>Save</Button>
      <Button variant="contained" color='error' onClick={cancel}>Cancel</Button>


      <CustomizeTable tableHead={['ID','Contact Name','Mobile1','Mobile2','Action']}>
            <TableBody>
                {SalesGood?.salGsubs?.map((item,idx) => (
                    <TableRow
                        key={idx}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            {item?.id} 
                        </TableCell>
                        <TableCell align="right">{item?.product}</TableCell>
                        
                        <TableCell align="right">{item?.qdisc}</TableCell>
                        <TableCell align="right">{item?.quntity}</TableCell>
                        <TableCell align="right">{item?.salGlnk}</TableCell>
                        <TableCell align="right">{item?.salGlnkNavigation}</TableCell>
                        <TableCell align="right">{item?.storeNavigation}</TableCell>
                        <TableCell align="right">{item?.store}</TableCell>
                        <TableCell align="right">{item?.totalPrice}</TableCell>
                        <TableCell align="right">{item?.unit}</TableCell>
                        <TableCell align="right">{item?.unitPrice}</TableCell>
                        
                        
                    </TableRow>

                ))}
            </TableBody>
        </CustomizeTable>
  </Grid>
    )
}
