import React, { useState } from 'react'
import { Redirect, Route, Switch } from 'react-router';
import ProductForm from '../components/product/ProductForm';
import ProductList from '../components/product/ProductList';





export default function Product() {

    return (
        
            <Switch>
                <Route exact path="/Product/add" component={() => <ProductForm/>} />
                <Route exact path="/Product/update/:id" component={() => <ProductForm />} />
                <Route exact path="/Product/list" component={() => <ProductList />} />
                <Redirect to='/Product/list' />
            </Switch>
        
    )
}
