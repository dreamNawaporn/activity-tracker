/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useDispatch } from 'react-redux'

import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Input from '@mui/material/Input';

const ariaLabel = { 'aria-label': 'description' };

const theme = createTheme({
    palette: {
        secondary: {
            main: '#ffcdd2',
            light: '',
            contrastText: '#d50000',
        },
    },
});

const Activity = ({ id }) => {
    const dispatch = useDispatch();
    const deleteActivity = () => {
        dispatch({
            type: "DELETE_ACTIVITY",
            payload: {
                id: id,
            },
        });
    };
    return (
        <div className='section'>
            <p>
                <b>Activity:</b>{' '}
                <Input disabled defaultValue="Activity" inputProps={ariaLabel} value={id} />{' '}
                {/* <b>Activity:</b> {id}, */}
                <b>Duration:</b>{' '}
                <ThemeProvider theme={theme}>
                    <Button onClick={deleteActivity} variant="contained" color="secondary">Delete</Button>
                </ThemeProvider>
                {/* <button onClick={deleteActivity}>Delete</button> */}
            </p>
        </div>
    );
};

export default Activity