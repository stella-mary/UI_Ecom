import * as React from 'react';
import { Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import shoe from '../../Img/shoe.jpg'


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function FormRow() {
    return (
        <React.Fragment

        >
            <Box
                display="flex"
                flexDirection="column"
            >
                <Grid item xs={4}>
                    <img src={shoe} alt="" width={250}></img>
                    Nike Airmax 270<br />
                    $120<br />
                    +
                </Grid>
            </Box>
            <Grid item xs={4}>
                <img src={shoe} alt="" width={250}></img>
            </Grid>
            <Grid item xs={4}>
                <img src={shoe} alt="" width={250}></img>
            </Grid>

        </React.Fragment >

    );
}

export default function Shop1() {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box
        >
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                    <Grid container item spacing={3}>
                        <FormRow />
                    </Grid>
                    <Grid container item spacing={3}>
                        <FormRow />
                    </Grid>
                    <Grid container item spacing={3}>
                        <FormRow />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}