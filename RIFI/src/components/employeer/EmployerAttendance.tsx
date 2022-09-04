import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import {SlideProps, TextField} from '@mui/material'
import {AttendanceInput} from '../../generated/graphql'
import produce from '@reduxjs/toolkit/node_modules/immer';

const Transition = React.forwardRef<unknown,SlideProps>(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const initState :AttendanceInput ={
    id:0
}
export default function EmployerAttendance(props:any) {
    const [Attendance ,setAttendance]=React.useState(initState)
    const {open,setOpen,idx,employer,setEmployer,setIndex}=props
    React.useEffect(()=>{
        if(idx >=0){
            setAttendance(employer.Attendance[idx])
        }
    },[idx])
  const handleClose = () => {
      setAttendance(initState)
    setOpen(false);
  };

  const AttendanceSave =() =>{
      if(idx >=0){setEmployer((perv :any) => produce(perv,(draft :any) => {
          draft.Attendance[idx]= Attendance
          return draft
      }))
      setIndex(-1)
    }
      else{
        setEmployer((perv :any) => produce(perv,(draft :any)=>{
            draft.Attendance.push(Attendance)
            return draft
        }))
      }
  }
  const inputChange =(e:any) =>{
      setAttendance({...Attendance,[e.target.name]:e.target.value})
  }
  return (
  
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Sound
            </Typography>
            <Button autoFocus color="inherit" onClick={AttendanceSave}>
              save
            </Button>
          </Toolbar>
        </AppBar>
            <form >
                <TextField name='name' value={Attendance.date} onChange={inputChange}></TextField>
                <TextField name='name' value={Attendance.dcheck} onChange={inputChange}></TextField>
                <TextField name='name' value={Attendance.employee} onChange={inputChange}></TextField>
                <TextField name='name' value={Attendance.employeeNavigation} onChange={inputChange}></TextField>
            </form>

      </Dialog>

  );
}