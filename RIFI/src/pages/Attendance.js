import React, { useState } from 'react'
import { Redirect , Route, Switch } from 'react-router';


export default function Attendance() {

    return (
        
            <Switch>
                <Route exact path="/Attendance/add" component={() => <AttendanceForm/>} />
                <Route exact path="/Attendance/update/:id" component={() => <AttendanceForm/>} />
                <Route exact path="/Attendance/list" component={() => <AttendanceList/>} />
                <Redirect to='/Attendance/list' />
            </Switch>
        
    )
}
