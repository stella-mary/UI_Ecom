import { Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Box from '@mui/material/Box';


const PaymentComplete2 = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">

            <Box
                display="flex"
                justifyContent="space-between"
                flexDirection="column"
                marginBottom="25px"
                borderRadius="10px"
                padding="15px"
                backgroundColor={colors.primary[400]}
            >
                <Box
                    fontSize="50px"
                    textAlign="center"
                >

                    <FontAwesomeIcon
                        icon={faCheckCircle} size="lg" />
                </Box>
                <Typography variant="h2"
                    fontWeight="600"
                    fontSize="20px"
                    marginTop="20px"
                    textAlign="center">
                    Success
                </Typography>


                <Typography variant="h2"
                    fontWeight="600"
                    fontSize="12px"
                    marginTop="20px"
                    color="#455a79"
                    textAlign="center"
                >
                    thank you for shopping using Uko</Typography>

                <Typography
                    color={colors.greenAccent[100]}
                    marginLeft="35%"
                    variant="h5"
                    fontWeight="600"
                    width="30%"
                    marginTop="15px"
                    paddingTop="10px"
                    textAlign="center"
                >
                    <button className="button">Back to Order</button>
                </Typography>
            </Box>
        </Box >

    );
};

export default PaymentComplete2;