import React from 'react'
import { Redirect, Route, Switch } from 'react-router';
import CustomerForm from '../components/customer/CustomerForm';
import CustomerList from '../components/customer/CustomerList';


export default function Customer() {

    return (
        
            <Switch>
                <Route  exact path="/Customer/add" component={() => <CustomerForm />} />
                <Route  path="/Customer/update/:id" component={() => <CustomerForm  />} />
                <Route  exact path='/Customer/list' component={() =><CustomerList/>} /> 
                <Redirect  to='/Customer/list' />   
            </Switch>    
                                              
    )
}
