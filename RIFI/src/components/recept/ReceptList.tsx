import React, { useState } from 'react'
import {  useGetReceptQuery } from '../../generated/graphql'
import {TableRow ,TablePagination,TableCell,TableBody} from '@mui/material';
import CustomizeTable from '../UI/CustomizedTable';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import AddButton from '../UI/AddButton'

export default function ReceptList() {
    const [page,setPage]=useState(0)
    const [rowsPerPage,setRowsPerPage]=useState(5)
    const handleChangePage=(e :any,newpage :number)=>{
        setPage(newpage)
    }
    const handleChangeRowsPerPage = (e:any) =>{
        setRowsPerPage(e.target.value)
        setPage(0)
    }
    const { data: Recept, isSuccess: isAccessSucess } = useGetReceptQuery({ take: rowsPerPage, skip: page*rowsPerPage })
    return (
<>
        <CustomizeTable tableHead={['ID','Amount','Bank Account','check bank','check date','check nb','costumer name','doc name','doc date','pay type','sale no']}>
            <TableBody>
                {Recept?.aReceipt?.items?.map((item,idx) => (
                    <TableRow
                        key={idx}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            {item?.id}
                        </TableCell>
                        <TableCell align="right">{item?.id}</TableCell>
                        <TableCell align="right">{item?.amount}</TableCell>
                        <TableCell align="right">{item?.bankAccount}</TableCell>
                        <TableCell align="right">{item?.checkBank}</TableCell>
                        <TableCell align="right">{item?.checkDate}</TableCell>
                        <TableCell align="right">{item?.checkno}</TableCell>
                        <TableCell align="right">{item?.customerName}</TableCell>
                        <TableCell align="right">{item?.docClass}</TableCell>
                        <TableCell align="right">{item?.docDate}</TableCell>
                        <TableCell align="right">{item?.payType}</TableCell>
                        <TableCell align="right">{item?.saleNo}</TableCell>
                        <TableCell>
                                <Link to={`/Recept/update/${item?.id}`}>
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
        count={Recept?.aReceipt?.totalCount!}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
    />
    <Link to='/Recept/add'>
                    <AddButton variant='contained' >
                    </AddButton>
                </Link>
    </>
    )
}
