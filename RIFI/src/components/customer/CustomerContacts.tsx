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
import {ContactInput} from '../../generated/graphql'
import produce from '@reduxjs/toolkit/node_modules/immer';

const Transition = React.forwardRef<unknown,SlideProps>(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const initState :ContactInput ={
    id:0
}
export default function CustomerContacts(props:any) {
    const [contact ,setContact]=React.useState(initState)
    const {open,setOpen,idx,customer,setCustomer,setIndex}=props
    React.useEffect(()=>{
        if(idx >=0){
            setContact(customer.contacts[idx])
        }
    },[idx])
  const handleClose = () => {
      setContact(initState)
    setOpen(false);
  };

  const contactSave =() =>{
      if(idx >=0){setCustomer((perv :any) => produce(perv,(draft :any) => {
          draft.contacts[idx]=contact
          return draft
      }))
      setIndex(-1)
    }
      else{
        setCustomer((perv :any) => produce(perv,(draft :any)=>{
            draft.contacts.push(contact)
            return draft
        }))
      }
  }
  const inputChange =(e:any) =>{
      setContact({...contact,[e.target.name]:e.target.value})
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
            <Button autoFocus color="inherit" onClick={contactSave}>
              save
            </Button>
          </Toolbar>
        </AppBar>
            <form >
                <TextField name='name' value={contact.name} onChange={inputChange}></TextField>
            </form>

      </Dialog>

  );
}