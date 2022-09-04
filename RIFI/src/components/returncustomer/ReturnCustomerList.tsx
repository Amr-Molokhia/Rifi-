import React, { useState } from 'react'
import {  useGetReturnCustomerQuery } from '../../generated/graphql'
import {TableRow ,TablePagination,TableCell,TableBody} from '@mui/material';
import CustomizeTable from '../UI/CustomizedTable';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import AddButton from '../UI/AddButton'
export default function ReturnCustomerList() {
    const [page,setPage]=useState(0)
    const [rowsPerPage,setRowsPerPage]=useState(5)
    const handleChangePage=(e :any,newpage :number)=>{
        setPage(newpage)
    }
    const handleChangeRowsPerPage = (e:any) =>{
        setRowsPerPage(e.target.value)
        setPage(0)
    }
    const { data: ReturnCustomer, isSuccess: isAccessSucess } = useGetReturnCustomerQuery({ take: rowsPerPage, skip: page*rowsPerPage })
    return (
<>
        <CustomizeTable tableHead={['ID','Employer Name','mobile','phone','salary system','salary value','Action']}>
            <TableBody>
                {ReturnCustomer?.aReturnCust?.items?.map((item,idx) => (
                    <TableRow
                        key={idx}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            {item?.id}
                        </TableCell>
                        <TableCell align="right">{item?.id}</TableCell>
                        <TableCell align="right">{item?.customerName}</TableCell>
                        <TableCell align="right">{item?.retCsubs}</TableCell>
                        <TableCell align="right">{item?.retDate}</TableCell>
                        <TableCell align="right">{item?.totalAmount}</TableCell>
                        <TableCell>
                                <Link to={`/customers/update/${item?.id}`}>
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
        count={ReturnCustomer?.aReturnCust?.totalCount!}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
    />
             <Link to='/catalog/add'>
                    <AddButton variant='contained' >
                    </AddButton>
                </Link>
    </>
    )
}
