import React, { useState } from 'react'
import { Redirect, Route, Switch } from 'react-router';
import WeeklyRepateForm from '../components/weeklyreapeat/WeeklyRepeatForm'
import WeaklyReapatList from '../components/weeklyreapeat/WeaklyReapeatList'

export default function WeaklyReapeat() {

    return (
        
            <Switch>
                <Route exact path="/WeaklyReapeat/add" component={() => < WeeklyRepateForm/>} />
                <Route exact path="/WeaklyReapeat/update/:id" component={() => <WeeklyRepateForm  />} />
                <Route exact path="/WeaklyReapeat/list" component={() => <WeaklyReapatList />} />
                <Redirect to='/WeaklyReapeat/list' />
            </Switch>
        
    )
}
