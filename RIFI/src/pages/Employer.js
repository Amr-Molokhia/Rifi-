import React, { useState } from 'react'
import { Redirect, Route, Switch } from 'react-router';
import EmployerForm from '../components/employeer/EmpoyerForm';
import EmployerList from '../components/employeer/EmployerList';


export default function Employer() {

    return (
        
            <Switch>
                <Route exact path="/Employer/add" component={() => <EmployerForm  />} />
                <Route exact path="/Employer/update/:id" component={() => <EmployerForm  />} />
                <Route exact path="/Employer/list" component={() => <EmployerList />} />
                <Redirect to='/Employer/list' />
            </Switch>
        
    )
}
