import React, { useState } from 'react'

import { Redirect, Route, Switch } from 'react-router';
import RecGoodForm from '../components/recGood/RecGoodForm';
import RecGoodList from '../components/recGood/RecGoodList';



export default function RecGood() {

    return (
        
            <Switch>
                <Route exact path="/RecGood/add" component={() => <RecGoodForm  />} />
                <Route exact path="/RecGood/update/:id" component={() => < RecGoodForm />} />
                <Route exact path="/RecGood/list" component={() => <RecGoodList />} />
                <Redirect to='/RecGood/list' />
            </Switch>
        
    )
}
