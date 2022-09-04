import React, { useState } from 'react'
import { Redirect, Route, Switch } from 'react-router';
import StoreForm from '../components/store/StoreForm';
import StoreList from '../components/store/StoreList';




export default function Store() {

    return (
        
            <Switch>
                <Route exact path="/Store/add" component={() => <StoreForm  />} />
                <Route exact path="/Store/update/:id" component={() => <StoreForm  />} />
                <Route exact path="/Store/list" component={() => <StoreList />} />
                <Redirect to='/Store/list' />
            </Switch>
        
    )
}
