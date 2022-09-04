import { Autocomplete } from '@mui/material'
import React from 'react'

export default function AutoCompleteAPI(props) {
    const {options,value,...others} =props
    if (options?.length > 0){
  
        return (            
            <Autocomplete
            fullWidth
            options={options}
            sx={{ width: 300 }}
            style={{ width: '100%' }}
            value={value}
            {...others}
        />          
        )
    }
    else {
        return <p>loading</p>
    }

}
