/* eslint-disable no-unused-vars */
import { useState } from 'react'
import Activity from "../components/Activity";
import AddActivity from "../components/AddActivity";
import { useDispatch, useSelector } from 'react-redux';

import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        secondary: {
            main: '#81c784',
            light: '',
            contrastText: '#1b5e20',
        },
    },
});

const Workout = () => {
    const [add, setAdd] = useState(false);
    const allActivities = useSelector((state) => state);
    const handleClick = () => {
        setAdd(!add);
    };
    console.log(allActivities);

    return (
        <div className="workour-wrapper">
            <h2>My Workout</h2>
            <ThemeProvider theme={theme}>
                <Button onClick={handleClick} variant="contained" color="secondary">Add Activity</Button>
            </ThemeProvider>

            {add && <AddActivity />}
            {allActivities.map((activity) => {
                return (
                    <Activity
                        key={activity.id}
                        id={activity.id}
                        name={activity.name}
                        duration={activity.duration}
                    />
                );
            })}
        </div>
    );
};

export default Workout