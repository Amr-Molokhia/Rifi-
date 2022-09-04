import React, { useState } from 'react'
import { useGetCashQuery,  } from '../../generated/graphql'
import {TableRow ,TablePagination,TableCell,TableBody} from '@mui/material';
import CustomizeTable from '../UI/CustomizedTable';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import AddButton from '../UI/AddButton'


export default function Cash() {
    const [page,setPage]=useState(0)
    const [rowsPerPage,setRowsPerPage]=useState(5)
    const handleChangePage=(e :any,newpage :number)=>{
        setPage(newpage)
    }
    const handleChangeRowsPerPage = (e:any) =>{
        setRowsPerPage(e.target.value)
        setPage(0)
    }
    const { data:Cash, isSuccess: isAccessSucess } = useGetCashQuery({ take: rowsPerPage, skip: page*rowsPerPage })
    return (
<>
        <CustomizeTable tableHead={['ID','amount','bank account','bank name','check date','check number','document class','document date','pay type','receved number','supply name']}>
            <TableBody>
                {Cash?.aCashRec?.items?.map((item,idx) => (
                    <TableRow
                        key={idx}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            {item?.id}
                        </TableCell>
                        <TableCell align="right">{item?.amount}</TableCell>
                        <TableCell align="right">{item?.bankAccount}</TableCell>
                        <TableCell align="right">{item?.bankName}</TableCell>
                        <TableCell align="right">{item?.checkDate}</TableCell>
                        <TableCell align="right">{item?.checkno}</TableCell>
                        <TableCell align="right">{item?.docClass}</TableCell>
                        <TableCell align="right">{item?.docDate}</TableCell>
                        <TableCell align="right">{item?.id}</TableCell>
                        <TableCell align="right">{item?.payType}</TableCell>
                        <TableCell align="right">{item?.reciveNo}</TableCell>
                        <TableCell align="right">{item?.supplierName}</TableCell>
                        <TableCell>
                                <Link to={`/Cash/update/${item?.id}`}>
                                    <EditIcon ></EditIcon>
                                </Link>
                                <DeleteIcon color='error' ></DeleteIcon>
                            </TableCell>        
                    </TableRow>
                ))}
            </TableBody>
        </CustomizeTable>
        <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={Cash?.aCashRec?.totalCount!}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
    />
    <Link to='/Cash/add'>
                    <AddButton variant='contained' >
                    </AddButton>
                </Link>
    </>
    )
}
