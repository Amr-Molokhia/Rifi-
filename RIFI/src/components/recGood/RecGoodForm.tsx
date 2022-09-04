import { Button, Grid, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { RecGoodInput, useCreatRecGoodMutation, useGetRecGoodByIdQuery, useUpdateRecGoodMutation } from '../../generated/graphql'
import {  useHistory, useParams } from 'react-router'
import { useGetCustomerQuery } from '../../generated/graphql'
import CustomerContacts from './RecGsubs'
import AddButton from '../UI/AddButton'
import {TableRow ,TableCell,TableBody} from '@mui/material';
import CustomizeTable from '../UI/CustomizedTable';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import RecGsubs from './RecGsubs'

const initstate : RecGoodInput= {
id:0,

}
const errors={
    discount:'',
    invoiceNo:'',
    recivingData:'',
    supplierName:'',
    total:'',
    totalAmount:'',
    recGsubs:'',
    
}
export default function RecGoodForm() {
    const [RecGood,setRecGood] =useState(initstate)
    const [open, setOpen] = useState(false);
    const [index,setIndex]=useState(-1)
   
    const inputChange = (e :any) =>{
        setRecGood( {...RecGood,[e.target.name]:e.target.value})
    }
    const {id} :any=useParams()
    const {data:aRecGoodfetch,isSuccess}=useGetRecGoodByIdQuery({id:+id!})
    
    const[updateTrigger]=useUpdateRecGoodMutation()
    useEffect(()=>{
        if(isSuccess)setRecGood(aRecGoodfetch?.aRecGood?.items![0]as RecGoodInput)
    },[aRecGoodfetch,isSuccess])
    const [triggerCreate]= useCreatRecGoodMutation()
    const validation = (RecGood :RecGoodInput) =>{
        if(RecGood.discount ==='') errors.discount='Please Insert Customer Name'
        if(RecGood.invoiceNo ==='') errors.invoiceNo='Please Insert Customer Name'
        if(RecGood.recivingData ==='') errors.recGsubs='Please Insert Customer Name'
        if(RecGood.supplierName ==='') errors.supplierName='Please Insert Customer Name'
        if(RecGood.total ==='') errors.total='Please Insert Customer Name'
        if(RecGood.totalAmount ==='') errors.totalAmount='Please Insert Customer Name'
        if(RecGood.recGsubs ===[]) errors.recGsubs='Please Insert Customer Name'
        
        
    }
    
    const history = useHistory()
    const save =() =>{
        if(id){updateTrigger({input:RecGood})}else{triggerCreate({input:RecGood})}
        history.push('/RecGood/list')
    }
    
    const cancel =() => {
        history.push('/RecGood/list')
    }
    return (
  <Grid container>
      <form>
      <Grid item  sm={12}>
      <TextField fullWidth label=' Name' variant='outlined' name='name' value={RecGood.discount} onChange={inputChange}
        {...errors.discount ==='' && { error: true, helperText: errors.discount }}
        ></TextField>
        <TextField fullWidth label=' Name' variant='outlined' name='name' value={RecGood.invoiceNo} onChange={inputChange}
        {...errors.invoiceNo ==='' && { error: true, helperText: errors.invoiceNo }}
        ></TextField>
        <TextField fullWidth label=' Name' variant='outlined' name='name' value={RecGood.recGsubs} onChange={inputChange}
        {...errors.recGsubs ==='' && { error: true, helperText: errors.recGsubs }}
        ></TextField>
        <TextField fullWidth label=' Name' variant='outlined' name='name' value={RecGood.recivingData} onChange={inputChange}
        {...errors.recivingData ==='' && { error: true, helperText: errors.recivingData }}
        ></TextField>
        <TextField fullWidth label=' Name' variant='outlined' name='name' value={RecGood.supplierName} onChange={inputChange}
        {...errors.supplierName ==='' && { error: true, helperText: errors.supplierName }}
        ></TextField>
        <TextField fullWidth label=' Name' variant='outlined' name='name' value={RecGood.total} onChange={inputChange}
        {...errors.total ==='' && { error: true, helperText: errors.total }}
        ></TextField>
        <TextField fullWidth label=' Name' variant='outlined' name='name' value={RecGood.totalAmount} onChange={inputChange}
        {...errors.totalAmount ==='' && { error: true, helperText: errors.totalAmount }}
        ></TextField>
       
       <RecGsubs open={open} setOpen={setOpen} RecGood={RecGood} setRecGood={setRecGood} idx={index} setIndex={setIndex}></RecGsubs>
      <Button variant="contained" onClick={save}>Save</Button>
      <AddButton onClick={()=> setOpen(true)}></AddButton>

       <CustomizeTable tableHead={['ID','Contact Name','Mobile1','Mobile2','Action']}>
            <TableBody>
                {RecGood?.recGsubs?.map((item,idx) => (
                    <TableRow
                        key={idx}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            {item?.id} 
                        </TableCell>
                        <TableCell align="right">{item?.product}</TableCell>
                        <TableCell align="right">{item?.produnit}</TableCell>
                        <TableCell align="right">{item?.produnit}</TableCell>
                        <TableCell align="right">{item?.qafterDiscount}</TableCell>
                        <TableCell align="right">{item?.quantity}</TableCell>
                        <TableCell align="right">{item?.recGlnk}</TableCell>
                        <TableCell align="right">{item?.recGlnkNavigation}</TableCell>
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
  </Grid>
    )
}
