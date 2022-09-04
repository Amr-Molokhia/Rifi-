import CustomizeTable from "../UI/controls/CustomizeTable";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";
import AddButton from "../UI/controls/AddButton";
import { TableCell, TableRow ,TablePagination} from "@mui/material";
import { useGetCustomersQuery } from '../../graphql'
import { useState } from "react";

const tableHead = [
    'Comapny Name', 'Company Address', 'Email', 'Mobile No', 'Landline', 'Website', 'action'
]

export default function CustomerList() {

    
    const [page, setPage] = useState<number>(0)
    const [rowsPerPage, setRowsPerPage] = useState<number>(5)
    const {data:customers,isSuccess:customersIsSuccess}  = useGetCustomersQuery({skip:page*rowsPerPage,limit:rowsPerPage})
    const handleChangePage = (event:any,newpage:number) => {
        setPage(newpage)
    }
    const handleChangeRowsPerPage = (e:any) => {
        setRowsPerPage(e.target.value)
        setPage(0)
    }
    if (customersIsSuccess && customers?.customer?.items?.length! > 0) {        
        return (
            <>
                <CustomizeTable tableHead={tableHead}>
                    {
                        customers?.customer?.items?.map((customer , idx ) => (
                            <TableRow key={idx}>
                            <TableCell>{customer?.comname}</TableCell>
                            <TableCell>{customer?.compmail}</TableCell>
                            <TableCell>{customer?.compmail}</TableCell>
                            <TableCell>{customer?.commobname}</TableCell>
                            <TableCell>{customer?.comphone}</TableCell>
                            <TableCell>{customer?.comwepsit}</TableCell>
                            <TableCell>
                                <Link to={`/customers/update/${customer?.comaid}`}>
                                    <EditIcon ></EditIcon>
                                </Link>
                                <DeleteIcon color='error' ></DeleteIcon>
                            </TableCell>
                        </TableRow>
                    ))
                       
                    }
                </CustomizeTable>
                <TablePagination
                rowsPerPageOptions={[5, 10, 15]}
                component="div"
                count={customers?.customer?.totalCount!}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
                <Link to='/customers/add'>
                    <AddButton variant='contained' >
                    </AddButton>
                </Link>
            </>
        );
    } else return (
        <Link to='/customers/add'>
        <AddButton variant='contained' >
        </AddButton>
    </Link>
    )
}