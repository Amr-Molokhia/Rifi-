import React, { useState } from 'react'
import {  useGetSupplierQuery  } from '../../generated/graphql'
import {TableRow ,TablePagination,TableCell,TableBody} from '@mui/material';
import CustomizeTable from '../UI/CustomizedTable';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import AddButton from '../UI/AddButton'

export default function SupplierList() {
    const [page,setPage]=useState(0)
    const [rowsPerPage,setRowsPerPage]=useState(5)
    const handleChangePage=(e :any,newpage :number)=>{
        setPage(newpage)
    }
    const handleChangeRowsPerPage = (e:any) =>{
        setRowsPerPage(e.target.value)
        setPage(0)
    }
    const { data:Supplier, isSuccess: isAccessSucess } = useGetSupplierQuery({ take: rowsPerPage, skip: page*rowsPerPage })
    return (
<>
<CustomizeTable tableHead={['ID','Address','mobile','phone','Contacts','Note','Name']}>
            <TableBody>
                {Supplier?.aSupplier?.items?.map((item,idx) => (
                    <TableRow
                        key={idx}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            {item?.id}
                        </TableCell>
                        <TableCell align="right">{item?.address}</TableCell>
                        <TableCell align="right">{item?.contacts}</TableCell>
                        <TableCell align="right">{item?.id}</TableCell>
                        <TableCell align="right">{item?.mobile}</TableCell>
                        <TableCell align="right">{item?.name}</TableCell>
                        <TableCell align="right">{item?.note}</TableCell>
                        <TableCell align="right">{item?.phone}</TableCell>
                        <TableCell>
                                <Link to={`/Supplier/update/${item?.id}`}>
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
        count={Supplier?.aSupplier?.totalCount!}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
    />
    <Link to='/Supplier/add'>
                    <AddButton variant='contained' >
                    </AddButton>
                </Link>
    </>
    )
}
