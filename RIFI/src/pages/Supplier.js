import React, { useState } from 'react'
import { Redirect, Route, Switch } from 'react-router';
import SupplierForm from '../components/supplier/SupplierForm';
import SupplierList from '../components/supplier/SupplierList';



export default function Supplier() {

    return (
        
            <Switch>
                <Route exact path="/Supplier/add" component={() => <SupplierForm  />} />
                <Route exact path="/Supplier/update/:id" component={() => <SupplierForm  />} />
                <Route exact path="/Supplier/list" component={() => <SupplierList />} />
                <Redirect to='/Supplier/list' />
            </Switch>
        
    )
}
