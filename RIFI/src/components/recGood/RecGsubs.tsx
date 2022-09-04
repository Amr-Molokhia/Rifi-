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
import { RecGsubInput, useGetProductClassByIdQuery, useGetProductClassQuery } from '../../generated/graphql'
import produce from '@reduxjs/toolkit/node_modules/immer';
import AutoCompleteAPI from '../UI/AutoCompleteAPI';


const Transition = React.forwardRef<unknown, SlideProps>(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const initState: RecGsubInput = {
  id: 0,
  store: { id: 0 }
}

export default function RecGsubs(props: any) {
  const [RecGsub, setRecGsub] = React.useState(initState)
  const [products,setProducts]=React.useState<any[]>()
  const { open, setOpen, idx, RecGood, setRecGood, setIndex } = props
  const { data: productClasses } = useGetProductClassQuery()
  const [productClassId,setProductClassId]=React.useState(0)
  const {data:productClassById, isSuccess:productClassByIdSuccess} = useGetProductClassByIdQuery({id:productClassId})
  
  React.useEffect(() => {
    if (idx >= 0) {
      setRecGsub(RecGood?.recGsubs![idx] as RecGsubInput)
      setProductClassId(RecGsub.product.classificationNavigation.id)
      if(productClassByIdSuccess)
      setProducts(productClassById?.aProdClass?.items![0]?.products! )
    }
  }, [idx])
  const handleClose = () => {
    setRecGsub(initState)
    setOpen(false);
  };

  const contactSave = () => {
    if (idx >= 0) {
      setRecGood((perv: any) => produce(perv, (draft: any) => {
        draft.RecGsubs[idx] = RecGsub
        return draft
      }))
      setIndex(-1)
    }
    else {
      setRecGood((perv: any) => produce(perv, (draft: any) => {
        draft.RecGsubs.push(RecGsub)
        return draft
      }))
    }
  }
  const inputChange = (e: any) => {
    setRecGsub({ ...RecGsub, [e.target.name]: e.target.value }  )
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
        {/* product table 1to1 */}
        {/* <TextField name='name' value={RecGsubs.prodClass} onChange={inputChange}></TextField>
                 <TextField name='name' value={RecGsubs.prodDesc} onChange={inputChange}></TextField>
                <TextField name='name' value={RecGsubs.produnit} onChange={inputChange}></TextField> */}
        <TextField name='name' value={RecGsub.qafterDiscount} onChange={inputChange}></TextField>
        <TextField name='name' value={RecGsub.quantity} onChange={inputChange}></TextField>

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
          value={RecGsub.productNavigation?.classificationNavigation?.id}
        />
          <AutoCompleteAPI
            name='Products'
            isOptionEqualToValue={(option :any, value :any) => value === '' ? true : option.id === value.id}
            options={products}
            getOptionLabel={(option :any) => option.description || ''}
            onChange={(e :any, v :any) => inputChange({ target: { name: 'productNavigation', value: v } })}
            renderInput={(params :any) => <TextField {...params} label="Vessel / Site" />}
            value={RecGsub.productNavigation}
          />
 
        <TextField name='name' value={RecGsub.unitPrice} onChange={inputChange}></TextField>
      </form>

    </Dialog>

  );
} 