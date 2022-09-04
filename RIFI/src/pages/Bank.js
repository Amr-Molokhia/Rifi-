import React, { useState } from 'react'
import BankList from '../components/customer/CustomerList'
import { Redirect, Route, Switch } from 'react-router';
import BankForm from '../components/customer/CustomerForm'


export default function Bank() {

    return (
        
            <Switch>
                <Route exact path="/Bank/add" component={() => <BankForm  />} />
                <Route exact path="/Bank/update/:id" component={() => <BankForm  />} />
                <Route exact path="/Bank/list" component={() => <BankList />} />
                <Redirect to='/Bank/list' />
            </Switch>
        
    )
}
