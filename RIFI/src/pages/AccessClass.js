import React, { useState } from 'react'
import { Redirect, Route, Switch  } from 'react-router';
import AccessClassForm from '../components/accessclass/AccessClassForm';
import AccessClassList from '../components/accessclass/AccessClassList';



export default function AccessClass() {

    return (
        
            <Switch >
                <Route exact path="/AccessClass/add" component={() => <AccessClassForm  />} />
                <Route exact path="/AccessClass/update/:id" component={() => <AccessClassForm/>} />
                <Route exact path="/AccessClass/list" component={() => <AccessClassList />} />
                <Redirect  to='/AccessClass/list' />
            </Switch >
        
    )
}
