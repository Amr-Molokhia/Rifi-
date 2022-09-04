import React, { useState } from 'react'
import { useGetAttendanceQuery } from '../../generated/graphql'
import { TableRow, TablePagination, TableCell, TableBody } from '@mui/material';
import CustomizeTable from '../UI/CustomizedTable';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import AddButton from '../UI/AddButton'

export default function Attendance() {
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(5)
    const handleChangePage = (e: any, newpage: number) => {
        setPage(newpage)
    }
    const handleChangeRowsPerPage = (e: any) => {
        setRowsPerPage(e.target.value)
        setPage(0)
    }
    const { data: Attendance, isSuccess: isAccessSucess } = useGetAttendanceQuery({ take: rowsPerPage, skip: page * rowsPerPage })
    return (
        <>
            <CustomizeTable tableHead={['Date', 'Employer Name', 'Check']}>
                <TableBody>
                    {Attendance?.aAttendance?.items?.map((item, idx) => (
                        <TableRow
                            key={idx}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {item?.id}
                            </TableCell>
                            <TableCell align="right">{item?.date}</TableCell>
                            <TableCell align="right">{item?.dcheck}</TableCell>
                            <TableCell align="right">{item?.employeeNavigation?.name}</TableCell>
                            <TableCell>
                                <Link to={`/Attendance/update/${item?.id}`}>
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
                count={Attendance?.aAttendance?.totalCount!}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
            <Link to='/Attendance/add'>
                <AddButton variant='contained' >
                </AddButton>
            </Link>
        </>
    )
}
