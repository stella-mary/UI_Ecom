import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import React, { useState } from 'react';
import { mockDataCart } from "../../../data/mockData";
import ApartmentIcon from '@mui/icons-material/Apartment';
import DeleteIcon from '@mui/icons-material/Delete';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Radio from '@mui/material/Radio';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';


const BillAddress = () => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };



    const [checked, setChecked] = React.useState(true);

    const handleChangeCheck = (event) => {
        setChecked(event.target.checked);
    };

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);




    return (
        <Box m="20px">


            <Box
                gridColumn="span 8"
                gridRow="span 2"
            >

                <Typography
                    variant="h6"
                    fontWeight="600"
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                    marginBottom="20px"
                    color={colors.grey[100]}
                >
                    Billing & Address
                    {/* <button className="button3">+ Add New Address</button> */}

                    <Button variant="outlined"
                        onClick={handleClickOpen}
                        style={{ color: 'white', background: '#2499ef' }}
                    >
                        + Add New Address
                    </Button>
                </Typography>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    PaperProps={{ style: { minWidth: '500px', backgroundColor: '#171c24;', border: 'solid 1px white' } }}
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Add new Address"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">

                            <Radio
                                checked={selectedValue === 'a'}
                                onChange={handleChange}
                                value="a"
                                name="radio-buttons"
                                title="home"
                                inputProps={{ 'aria-label': 'A' }}
                            />
                            <label>
                                Home
                            </label>
                            <Radio
                                checked={selectedValue === 'b'}
                                onChange={handleChange}
                                value="b"
                                name="radio-buttons"
                                inputProps={{ 'aria-label': 'B' }}
                            />
                            <label>
                                Office
                            </label>


                            <Box
                                sx={{
                                    width: 500,
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    gap: '10px',
                                    maxWidth: '100%',
                                    marginBottom: '20px',
                                    marginTop: "20px",
                                    color: '#455a79',
                                }}
                            >
                                <TextField fullWidth label="Full Name" id="Full Name" InputLabelProps={{ style: { color: '#2499ef' } }}
                                    InputProps={{
                                        style: {
                                            borderColor: 'red', // Set the border color
                                        },
                                    }} />

                                <TextField fullWidth label="Phone" id="Phone" InputLabelProps={{ style: { color: '#2499ef' } }}
                                    InputProps={{
                                        style: {
                                            borderColor: 'red', // Set the border color
                                        },
                                    }} />
                            </Box>
                            <Box
                                sx={{
                                    width: 500,
                                    maxWidth: '100%',
                                    marginBottom: '20px',
                                    marginTop: "20px",
                                    color: '#2499ef',
                                }}
                            >
                                <TextField fullWidth label="Address" id="Address" InputLabelProps={{ style: { color: '#2499ef' } }}
                                    InputProps={{
                                        style: {
                                            borderColor: 'red', // Set the border color
                                        },
                                    }} />
                            </Box>

                            <Box
                                sx={{
                                    width: 500,
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    gap: '10px',
                                    maxWidth: '100%',
                                    marginBottom: '20px',
                                    marginTop: "20px",
                                    color: '#455a79',
                                }}
                            >

                                <TextField fullWidth label="City" id="City" InputLabelProps={{ style: { color: '#2499ef' } }}
                                    InputProps={{
                                        style: {
                                            borderColor: 'red', // Set the border color
                                        },
                                    }} />

                                <TextField fullWidth label="Country" id="Country" InputLabelProps={{ style: { color: '#2499ef' } }}
                                    InputProps={{
                                        style: {
                                            borderColor: 'red', // Set the border color
                                        },
                                    }} />
                            </Box>

                            <Checkbox
                                checked={checked}
                                onChange={handleChangeCheck}
                                inputProps={{ 'aria-label': 'controlled' }}
                            />
                            <span>Use this address as default</span>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} style={{ border: '1px solid #5d6066', marginRight: '8px', color: 'white' }}>
                            Cancel
                        </Button>
                        <Button onClick={handleClose} autoFocus style={{ border: '1px solid #5d6066', background: '#2499ef', color: 'white' }}>
                            Deliver to this address
                        </Button>
                    </DialogActions>
                </Dialog>


                < Box
                    display="flex"
                    justifyContent="space-between"
                    marginBottom="15px"
                    borderRadius="10px"
                    padding="15px"
                    backgroundColor={colors.primary[400]}
                >
                    <Box>
                        <Typography variant="h5" fontWeight="600" color={colors.grey[100]} >
                            <span className="color"><ApartmentIcon /></span><span class="space" />Office
                        </Typography>
                        <Box
                            display="flex"
                            justifyContent="space-around"
                            gap="300px"
                        >
                            <Typography variant="h5" fontWeight="600" fontSize="12px" lineHeight="20px" marginTop="15px" color={colors.grey[100]} >
                                Ap #285-7193 Ullamcorper Avenue
                                <br />
                                Amesbury HI 93373
                                <br />
                                USA
                            </Typography>
                            <Typography variant="h5" fontWeight="600" fontSize="12px" marginTop="15px" color={colors.grey[100]} >
                                <span className="color"><DeleteIcon /></span>
                            </Typography>
                        </Box>
                    </Box >
                </Box>
            </Box >


            <Box
                gridColumn="span 8"
                gridRow="span 2"
            >
                < Box
                    display="flex"
                    justifyContent="space-between"
                    marginBottom="15px"
                    borderRadius="10px"
                    padding="15px"
                    backgroundColor={colors.primary[400]}
                >
                    <Box>
                        <Typography variant="h5" fontWeight="600" color={colors.grey[100]} >
                            <span className="color"><ApartmentIcon /></span><span class="space" />Office
                        </Typography>
                        <Box
                            display="flex"
                            justifyContent="space-around"
                            gap="300px"
                        >
                            <Typography variant="h5" fontWeight="600" fontSize="12px" lineHeight="20px" marginTop="15px" color={colors.grey[100]} >
                                Ap #285-7193 Ullamcorper Avenue
                                <br />
                                Amesbury HI 93373
                                <br />
                                USA
                            </Typography>
                            <Typography variant="h5" fontWeight="600" fontSize="12px" marginTop="15px" color={colors.grey[100]} >
                                <span className="color"><DeleteIcon /></span>
                            </Typography>
                        </Box>
                    </Box >
                </Box>
            </Box >



            <Box
                gridColumn="span 8"
                gridRow="span 2"
            >
                < Box
                    display="flex"
                    justifyContent="space-between"
                    marginBottom="15px"
                    borderRadius="10px"
                    padding="15px"
                    backgroundColor={colors.primary[400]}
                >
                    <Box>
                        <Typography variant="h5" fontWeight="600" color={colors.grey[100]} >
                            <span className="color"><ApartmentIcon /></span><span class="space" />Office
                        </Typography>
                        <Box
                            display="flex"
                            justifyContent="space-around"
                            gap="300px"
                        >
                            <Typography variant="h5" fontWeight="600" fontSize="12px" lineHeight="20px" marginTop="15px" color={colors.grey[100]} >
                                Ap #285-7193 Ullamcorper Avenue
                                <br />
                                Amesbury HI 93373
                                <br />
                                USA
                            </Typography>
                            <Typography variant="h5" fontWeight="600" fontSize="12px" marginTop="15px" color={colors.grey[100]} >
                                <span className="color"><DeleteIcon /></span>
                            </Typography>
                        </Box>
                    </Box >
                </Box>
                <Typography
                    marginLeft="20px"
                ><ChevronLeftOutlinedIcon /><span className="space" />Back </Typography>
            </Box >




        </Box >


    );
};

export default BillAddress;