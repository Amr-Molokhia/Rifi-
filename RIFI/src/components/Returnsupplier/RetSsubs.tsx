import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { SlideProps, TextField } from '@mui/material'
import { RecGsubInput, RetCsub, RetSsubInput, useGetProductClassByIdQuery, useGetProductClassQuery } from '../../generated/graphql'
import produce from '@reduxjs/toolkit/node_modules/immer';
import AutoCompleteAPI from '../UI/AutoCompleteAPI';

const Transition = React.forwardRef<unknown,SlideProps>(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const initState :RetSsubInput ={
    id:0,
    store:{id:0}
}
export default function RetSsubs(props:any) {
    const [retSsubs ,setRetSsub]=React.useState(initState)
    const [products,setProducts]=React.useState<any[]>()
    const {open,setOpen,idx,ReturnSupp,setReturnSupp,setIndex}=props
    const { data: productClasses } = useGetProductClassQuery()
    const [productClassId,setProductClassId]=React.useState(0)
    const {data:productClassById, isSuccess:productClassByIdSuccess} = useGetProductClassByIdQuery({id:productClassId})

    React.useEffect(()=>{
        if(idx >=0){
          setRetSsub(ReturnSupp?.recGsubs![idx] as RetSsubInput)
          setProductClassId(retSsubs.product.classificationNavigation.id)
          if(productClassByIdSuccess)
          setProducts(productClassById?.aProdClass?.items![0]?.products! )
        }
    },[idx])
  const handleClose = () => {
    setRetSsub(initState)
    setOpen(false);
  };

  const contactSave =() =>{
      if(idx >=0){setReturnSupp((perv :any) => produce(perv,(draft :any) => {
          draft.retSsubs[idx]=ReturnSupp
          return draft
      }))
      setIndex(-1)
    }
      else{
        setReturnSupp((perv :any) => produce(perv,(draft :any)=>{
            draft.retSsubs.push(ReturnSupp)
            return draft
        }))
      }
  }
  const inputChange =(e:any) =>{
    setRetSsub({...retSsubs,[e.target.name]:e.target.value})
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
                <TextField name='name' value={retSsubs.produnit} onChange={inputChange}></TextField>
                <TextField name='name' value={retSsubs.product} onChange={inputChange}></TextField>
                <TextField name='name' value={retSsubs.quntity} onChange={inputChange}></TextField>
                <TextField name='name' value={retSsubs.retAccTypr} onChange={inputChange}></TextField>
                <TextField name='name' value={retSsubs.retSlnk} onChange={inputChange}></TextField>
                <TextField name='name' value={retSsubs.retSlnkNavigation} onChange={inputChange}></TextField>
                <TextField name='name' value={retSsubs.store} onChange={inputChange}></TextField>
                <TextField name='name' value={retSsubs.totalPrice} onChange={inputChange}></TextField>
                <TextField name='name' value={retSsubs.unitPrice} onChange={inputChange}></TextField>
                <TextField name='name' value={retSsubs.productNavigation} onChange={inputChange}></TextField>
                <TextField name='name' value={retSsubs.storeNavigation} onChange={inputChange}></TextField>
            </form>

            <AutoCompleteAPI
          name='Product Class'
          isOptionEqualToValue={(option:any, value:any) => {
            if (value.id === 0 || value === '') return true
            else return option.id === value.id
          }}
          options={productClasses?.aProdClass?.items}
          sx={{ width: 300 }}
          getOptionLabel={(option :any)=> option.description || ''}
          onChange={(e:any, v:any) => setProducts(v.products)}
          renderInput={(params :any) => <TextField {...params} label="Customers" />}
          value={retSsubs.productNavigation?.classificationNavigation?.id}
        />
          <AutoCompleteAPI
            name='Products'
            isOptionEqualToValue={(option :any, value :any) => value === '' ? true : option.id === value.id}
            options={products}
            getOptionLabel={(option :any) => option.description || ''}
            onChange={(e :any, v :any) => inputChange({ target: { name: 'productNavigation', value: v } })}
            renderInput={(params :any) => <TextField {...params} label="Vessel / Site" />}
            value={retSsubs.productNavigation}
          />

      </Dialog>

  );
}