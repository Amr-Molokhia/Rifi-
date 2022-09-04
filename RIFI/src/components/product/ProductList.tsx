import React, { useState } from 'react'
import {  useGetProductQuery } from '../../generated/graphql'
import {TableRow ,TablePagination,TableCell,TableBody} from '@mui/material';
import CustomizeTable from '../UI/CustomizedTable';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import AddButton from '../UI/AddButton'

export default function ProductList() {
    const [page,setPage]=useState(0)
    const [rowsPerPage,setRowsPerPage]=useState(5)
    const handleChangePage=(e :any,newpage :number)=>{
        setPage(newpage)
    }
    const handleChangeRowsPerPage = (e:any) =>{
        setRowsPerPage(e.target.value)
        setPage(0)
    }
    const { data: Product, isSuccess: isAccessSucess } = useGetProductQuery({ take: rowsPerPage, skip: page*rowsPerPage })
    return (
<>
        <CustomizeTable tableHead={['ID','Classification','Description']}>
            <TableBody>
                {Product?.aProduct?.items?.map((item,idx) => (
                    <TableRow
                        key={idx}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            {item?.id}
                        </TableCell>
                        <TableCell align="right">{item?.id}</TableCell>
                        <TableCell align="right">{item?.classification}</TableCell>
                        <TableCell align="right">{item?.description}</TableCell>
                        <TableCell>
                                <Link to={`/Product/update/${item?.id}`}>
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
        count={Product?.aProduct?.totalCount!}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
    />
    <Link to='/Product/add'>
                    <AddButton variant='contained' >
                    </AddButton>
                </Link>
    </>
    )
}
