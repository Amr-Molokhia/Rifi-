import React, { useState } from 'react'
import {    useGetRightQuery, useGetSalesGoodQuery, useGetWeaklyReapateQuery } from '../../generated/graphql'
import {TableRow ,TablePagination,TableCell,TableBody} from '@mui/material';
import CustomizeTable from '../UI/CustomizedTable';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import AddButton from '../UI/AddButton'


export default function RightList() {
    const [page,setPage]=useState(0)
    const [rowsPerPage,setRowsPerPage]=useState(5)
    const handleChangePage=(e :any,newpage :number)=>{
        setPage(newpage)
    }
    const handleChangeRowsPerPage = (e:any) =>{
        setRowsPerPage(e.target.value)
        setPage(0)
    }
    const { data: Right, isSuccess: isAccessSucess } = useGetRightQuery({ take: rowsPerPage, skip: page*rowsPerPage })
    return (
<>
        <CustomizeTable tableHead={['ID','Employer Name','mobile','phone','salary system','salary value']}>
            <TableBody>
                {Right?.uright?.items?.map((item,idx) => (
                    <TableRow
                        key={idx}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            {item?.id}
                        </TableCell>
                        <TableCell align="right">{item?.id}</TableCell>
                        <TableCell align="right">{item?.password}</TableCell>
                        <TableCell align="right">{item?.username}</TableCell>
                        <TableCell align="right">{item?.s01}</TableCell>
                        <TableCell align="right">{item?.s02}</TableCell>
                        <TableCell align="right">{item?.s03}</TableCell>
                        <TableCell align="right">{item?.s04}</TableCell>
                        <TableCell align="right">{item?.s05}</TableCell>
                        <TableCell align="right">{item?.s06}</TableCell>
                        <TableCell>
                                <Link to={`/Uright/update/${item?.id}`}>
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
        count={Right?.uright?.totalCount!}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
    />
    <Link to='/Uright/add'>
                    <AddButton variant='contained' >
                    </AddButton>
                </Link>
    </>
    )
}
