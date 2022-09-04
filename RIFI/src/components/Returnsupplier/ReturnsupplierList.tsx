import React, { useState } from 'react'
import { useGetReturnSupportQuery } from '../../generated/graphql'
import { TableRow, TablePagination, TableCell, TableBody } from '@mui/material';
import CustomizeTable from '../UI/CustomizedTable';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import AddButton from '../UI/AddButton'

export default function ReturnsupplierList() {
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(5)
    const handleChangePage = (e: any, newpage: number) => {
        setPage(newpage)
    }
    const handleChangeRowsPerPage = (e: any) => {
        setRowsPerPage(e.target.value)
        setPage(0)
    }
    const { data: returnsupplier, isSuccess: isAccessSucess } = useGetReturnSupportQuery({ take: rowsPerPage, skip: page * rowsPerPage })
    return (
        <>
            <CustomizeTable tableHead={['ID', 'Employer Name', 'mobile', 'phone', 'salary system', 'salary value']}>
                <TableBody>
                    {returnsupplier?.aReturnSupp?.items?.map((item, idx) => (
                        <TableRow
                            key={idx}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {item?.id}
                            </TableCell>
                            <TableCell align="right">{item?.id}</TableCell>
                            <TableCell align="right">{item?.retDate}</TableCell>
                            <TableCell align="right">{item?.retSsubs}</TableCell>
                            <TableCell align="right">{item?.supplierName}</TableCell>
                            <TableCell align="right">{item?.totalAmount}</TableCell>
                            <TableCell>
                                <Link to={`/ReturnSupp/update/${item?.id}`}>
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
                count={returnsupplier?.aReturnSupp?.totalCount!}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
            <Link to='/ReturnSupp/add'>
                <AddButton variant='contained' >
                </AddButton>
            </Link>
        </>
    )
}
