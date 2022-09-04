import React, { useState } from 'react'
import { Redirect, Route, Switch } from 'react-router';
import ReturnSuppForm from '../components/Returnsupplier/ReturnSupplierForm';
import ReturnsupplierList from '../components/Returnsupplier/ReturnsupplierList';

export default function ReturnSupp() {

    return (
        
            <Switch>
                <Route exact path="/ReturnSupp/add" component={() => < ReturnSuppForm />} />
                <Route exact path="/ReturnSupp/update/:id" component={() => < ReturnSuppForm/>} />
                <Route exact path="/ReturnSupp/list" component={() => < ReturnsupplierList/>} />
                <Redirect to='/ReturnSupp/list' />
            </Switch>
        
    )
}
