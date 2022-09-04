import React, { useState } from 'react'
import CashList from '../components/customer/CustomerList'
import { Redirect, Route, Switch } from 'react-router';
import CashForm from '../components/cash/CashForm';


export default function Cash() {

    return (
        
            <Switch>
                <Route exact path="/Cash/add" component={() => <CashForm  />} />
                <Route exact path="/Cash/update/:id" component={() => <CashForm  />} />
                <Route exact path="/Cash/list" component={() => <CashList />} />
                <Redirect to='/Cash/list' />
            </Switch>
        
    )
}
