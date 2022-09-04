import React, { useState } from 'react'
import { Redirect, Route, Switch } from 'react-router';
import ProductClassList from '../components/productClass/ProductClassList';
import ProductClassForm from '../components/productClass/ProductClassForm';



export default function ProductClass() {

    return (
        
            <Switch>
                <Route exact path="/ProductClass/add" component={() => <ProductClassForm  />} />
                <Route exact path="/ProductClass/update/:id" component={() => <ProductClassForm  />} />
                <Route exact path="/ProductClass/list" component={() => <ProductClassList />} />
                <Redirect to='/ProductClass/list' />
            </Switch>
        
    )
}
