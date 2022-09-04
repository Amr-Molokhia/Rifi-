import React, { useState } from 'react'
import {  useGetRecGoodQuery } from '../../generated/graphql'
import {TableRow ,TablePagination,TableCell,TableBody} from '@mui/material';
import CustomizeTable from '../UI/CustomizedTable';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import AddButton from '../UI/AddButton'

export default function RecGoodList() {
    const [page,setPage]=useState(0)
    const [rowsPerPage,setRowsPerPage]=useState(5)
    const handleChangePage=(e :any,newpage :number)=>{
        setPage(newpage)
    }
    const handleChangeRowsPerPage = (e:any) =>{
        setRowsPerPage(e.target.value)
        setPage(0)
    }
    const { data: RecGood, isSuccess: isAccessSucess } = useGetRecGoodQuery({ take: rowsPerPage, skip: page*rowsPerPage })
    return (
<>
        <CustomizeTable tableHead={['ID','Discount','mobile','phone','salary system','salary value','salary system','salary value']}>
            <TableBody>
                {RecGood?.aRecGood?.items?.map((item,idx) => (
                    <TableRow
                        key={idx}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            {item?.id}
                        </TableCell>
                        <TableCell align="right">{item?.id}</TableCell>
                        <TableCell align="right">{item?.discount}</TableCell>
                        <TableCell align="right">{item?.invoiceNo}</TableCell>
                        <TableCell align="right">{item?.recGsubs}</TableCell>
                        <TableCell align="right">{item?.recivingData}</TableCell>
                        <TableCell align="right">{item?.supplierName}</TableCell>
                        <TableCell align="right">{item?.total}</TableCell>
                        <TableCell align="right">{item?.totalAmount}</TableCell>
                        <TableCell>
                                <Link to={`/RecGood/update/${item?.id}`}>
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
        count={RecGood?.aRecGood?.totalCount!}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
    />
    <Link to='/RecGood/add'>
                    <AddButton variant='contained' >
                    </AddButton>
                </Link>
    </>
    )
}
