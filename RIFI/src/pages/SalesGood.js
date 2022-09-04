import React, { useState } from 'react'
import { Redirect, Route, Switch } from 'react-router';
import SalesGoodForm from '../components/salesgood/SalesGoodForm';
import SalesGoodList from '../components/salesgood/SalesGoodList';



export default function SalesGood() {

    return (
        
            <Switch>
                <Route exact path="/SalesGood/add" component={() => <SalesGoodForm />} />
                <Route exact path="/SalesGood/update/:id" component={() => <SalesGoodForm  />} />
                <Route exact path="/SalesGood/list" component={() => <SalesGoodList />} />
                <Redirect to='/SalesGood/list' />
            </Switch>
        
    )
}
