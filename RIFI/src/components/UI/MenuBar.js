import React from 'react';
import { AppBar, Grid, IconButton, Toolbar } from '@mui/material';
import { makeStyles } from '@mui/styles';
import MenuIcon from '@mui/icons-material/Menu';
import LoginIcon from '@mui/icons-material/Login';

const styles = makeStyles(theme =>({
    root : {

        '& .MuiSvgIcon-root': {
            color : '#FFFFFF'
        }
    }

}));
    
export default function MenuBar(props) {
    const classes= styles();
    return (
        <AppBar className={classes.root}  position='static'>
            <Toolbar>
                <Grid container>
                    <Grid item>
                        <IconButton size='large' onClick={props.sideBarVisibility}>
                            <MenuIcon  />
                        </IconButton>
                    </Grid>
                    <Grid item sm/>
                    <Grid item>
                        <IconButton size='large'>
                            <LoginIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
