/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState } from "react"
import { useDispatch } from "react-redux"

import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import TextField from '@mui/material/TextField';

// import { lime, purple } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        secondary: {
            main: '#81c784',
            light: '',
            contrastText: '#1b5e20',
        },
    },
});

const AddActivity = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState({
        name: "",
        duration: "",
    });

    const handleChange = (e) => {
        e.persist();
        setData((prev) => ({
            ...prev, [e.target.name]: e.target.
                value
        }));
    };
    const addActivity = () => {
        dispatch({
            type: "CREATE_ACTIVITY",
            payload: {
                name: data.name,
                duration: data.duration,
            },
        });
    };

    return (
        <div className="add">
            <div className="input-section">
                <TextField id="standard-basic"
                    label="Activity name"
                    type="text"
                    name="name"
                    placeholder="Activity name ..."
                    onChange={(e) => handleChange(e)}
                    variant="standard"
                    color="warning"
                    fullWidth
                />
            </div>
            <br></br>
            <div className="input-section">
                <TextField id="standard-basic"
                    label="Activity duration"
                    type="text"
                    name="duration"
                    placeholder="Activity duration ..."
                    onChange={(e) => handleChange(e)}
                    variant="standard" 
                    color="warning"
                    fullWidth
                />
            </div>
            <br></br>
            <ThemeProvider theme={theme}>
                <Button onClick={addActivity} variant="contained" color="secondary" >Add Activity</Button>
            </ThemeProvider>
        </div>
    );
};

export default AddActivity;