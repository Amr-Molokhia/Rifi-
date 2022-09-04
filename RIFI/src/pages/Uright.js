import React, { useState } from 'react'
import { Redirect, Route, Switch } from 'react-router';
import UrightForm from '../components/uright/UrightForm';
import UrightList from '../components/uright/UrightList';


export default function Uright() {

    return (
        
            <Switch>
                <Route exact path="/Uright/add" component={() => <UrightForm  />} />
                <Route exact path="/Uright/update/:id" component={() => <UrightForm  />} />
                <Route exact path="/Uright/list" component={() => <UrightList />} />
                <Redirect to='/Uright/list' />
            </Switch>
        
    )
}
