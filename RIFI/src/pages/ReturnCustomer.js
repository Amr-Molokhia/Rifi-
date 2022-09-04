import React, { useState } from 'react'
import { Redirect, Route, Switch } from 'react-router';
import ReturnCustomerForm from '../components/returncustomer/ReturnCustomerForm'
import ReturnCustomerList from '../components/returncustomer/ReturnCustomerList'


export default function ReturnCustomer() {

    return (
        
            <Switch>
                <Route exact path="/ReturnCustomer/add" component={() => <ReturnCustomerForm />} />
                <Route exact path="/ReturnCustomer/update/:id" component={() => <ReturnCustomerForm  />} />
                <Route exact path="/ReturnCustomer/list" component={() => < ReturnCustomerList/>} />
                <Redirect to='/ReturnCustomer/list' />
            </Switch>
        
    )
}
