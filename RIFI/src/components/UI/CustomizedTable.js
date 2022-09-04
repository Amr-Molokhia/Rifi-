import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#122559',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = makeStyles( theme  => ({
    root: {
        '& .MuiTableRow-root':{
          '&:nth-of-type(odd)': {
            backgroundColor: '#EAEEF3'
          },
          '&:last-child td, &:last-child th': {
            border: 0,
          },
        }

      },

      contanier:{
        marginTop:'20px'
      }

 
}));


export default function CustomizeTable(props) {
    const classes = StyledTableRow();
    const {tableHead}=props
  return (
    <TableContainer component={Paper} className={classes.contanier}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
              {tableHead.map((cell,idx) => (
                  
                  <StyledTableCell key={idx} align="left">{cell}</StyledTableCell>
              ))}
          </TableRow>
        </TableHead>
        <TableBody className={classes.root}>
          {props.children}
        </TableBody>
      </Table>
    </TableContainer>
  );
}