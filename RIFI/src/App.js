import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom'
import { useState } from 'react';
import AccessClass from './pages/AccessClass';
import Customer from './pages/Customer';
import Attendance from './components/attendance/AttendanceList';
import Bank from './components/bank/BankList';
import Cash from './components/cash/CashList';
import Employer from './pages/Employer';
import Product from './pages/Product';
import ProductClass from './pages/ProductClass';
import Recept from './pages/Recipt';
import ReturnCustomer from './pages/ReturnCustomer';
import SalesGood from './pages/SalesGood';
import Store from './pages/Store';
import Supplier from './pages/Supplier';
import Uright from './pages/Uright';
import ReturnSupp from './pages/ReturnSupplier';
import WeaklyReapeat from './pages/WeeklyRepeat'
import { makeStyles } from '@mui/styles'
import MenuBar from './components/UI/MenuBar';
import SideBar from './components/UI/SideBar';
import ReturnSupplier from './pages/ReturnSupplier'
import RecGood from './pages/RecGood';
import CustomerForm from './components/customer/CustomerForm';
import CustomerList from './components/customer/CustomerList';
const menuitems = [{
  name: 'Customers',
  link: '/Customer',
  icon: <i className='bx bx-blug' />
}, {
  name: 'AccessClass',
  link: '/AccessClass',
  icon: <i className='bx bx-blug' />
}, {
  name: 'Bank',
  link: '/Bank',
  icon: <i className='bx bx-blug' />
}, {
  name: 'Attendance',
  link: '/Attendance',
  icon: <i className='bx bx-blug' />
}, {
  name: 'Cash',
  link: '/Cash',
  icon: <i className='bx bx-blug' />
}, {
  name: 'Employer',
  link: '/Employer',
  icon: <i className='bx bx-blug' />
}, {
  name: 'Product',
  link: '/Product',
  icon: <i className='bx bx-blug' />
}, {
  name: 'ProductClass',
  link: '/ProductClass',
  icon: <i className='bx bx-blug' />
}, {
  name: 'recept',
  link: '/recept',
  icon: <i className='bx bx-blug' />
}, {
  name: 'recGood',
  link: '/recGood',
  icon: <i className='bx bx-blug' />
}, {
  name: 'returnCustomer',
  link: '/returnCustomer',
  icon: <i className='bx bx-blug' />
}, {
  name: 'returnSupplier',
  link: '/returnSupplier',
  icon: <i className='bx bx-blug' />
}, {
  name: 'SalesGoods',
  link: '/SalesGoods',
  icon: <i className='bx bx-blug' />
}, {
  name: 'Store',
  link: '/Store',
  icon: <i className='bx bx-blug' />
}, {
  name: 'Supplier',
  link: '/Supplier',
  icon: <i className='bx bx-blug' />
}, {
  name: 'Uright',
  link: '/Uright',
  icon: <i className='bx bx-blug' />
}, {
  name: 'weeklyrepeat',
  link: '/weeklyrepeat',
  icon: <i className='bx bx-blug' />
}]


const styles = makeStyles({
  appMain: {
    paddingTop: '50px',
    paddingLeft: ((prop) => prop ? '320px' : '78px'),
    width: '90%',
    margin: 'auto'
  }
})

function App() {
  const [visiable, setVisiable] = useState(true)
  const classes = styles(visiable)
  const sideBarVisibility = () => {
    setVisiable(!visiable)
  }
  return (
    <>
      <MenuBar sideBarVisibility={sideBarVisibility} ></MenuBar>
      <BrowserRouter>
        <SideBar visiable={visiable} menuItems={menuitems} ></SideBar>
        <div className={classes.appMain}>

          <Route path='/AccessClass' component={AccessClass} />
          <Route path='/Attendance' component={Attendance} />
          <Route path='/Bank' component={Bank} />
          <Route path='/Cash' component={Cash} />
          <Route path='/Employer' component={Employer} />
          <Route path='/Product' component={Product} />
          <Route path='/ProductClass' component={ProductClass} />
          <Route path='/recept' component={Recept} />
          <Route path='/recGood' component={RecGood} />
          <Route path='/returnCustomer' component={ReturnCustomer} />
          <Route path='/returnSupplier' component={ReturnSupplier} />
          <Route path='/SalesGoods' component={SalesGood} />
          <Route path='/Store' component={Store} />
          <Route path='/Supplier' component={Supplier} />
          <Route path='/Uright' component={Uright} />
          <Route path='/weeklyrepeat' component={WeaklyReapeat} />
          <Route path='/Customer' component={Customer} />




        </div>
      </BrowserRouter>

    </>
  );
}

export default App;
