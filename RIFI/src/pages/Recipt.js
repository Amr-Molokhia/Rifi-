import React, { useState } from 'react'
import { Redirect, Route, Switch } from 'react-router';
import ReceiptForm from '../components/recept/ReceptForm';
import ReceptList from '../components/recept/ReceptList';



export default function Recept() {

    return (
        
            <Switch>
                <Route exact path="/Recept/add" component={() => <ReceiptForm  />} />
                <Route exact path="/Recept/update/:id" component={() => <ReceiptForm  />} />
                <Route exact path="/Recept/list" component={() => <ReceptList />} />
                <Redirect to='/Recept/list' />
            </Switch>
        
    )
}
