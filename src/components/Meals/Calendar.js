import React, { useState } from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TextField } from '@mui/material';
import { DateCalendar } from '@mui/x-date-pickers';

export default function Calendar()  {
    const [value, setValue] =useState(new Date())
    return (
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateCalendar
              orientation="landscape"
              openTo='day'
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              
              }}
              renderInput={(params) => <TextField {...
                params}/>}

              
               />
            </LocalizationProvider>
          );
}

