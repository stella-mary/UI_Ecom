import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import React, { useState } from 'react';
import { mockDataCart } from "../../../data/mockData";
import ApartmentIcon from '@mui/icons-material/Apartment';
import DeleteIcon from '@mui/icons-material/Delete';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import shoe from '../../Img/shoe.jpg'
import { GifBoxSharp } from "@mui/icons-material";


const BillAddress = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);


    return (
        // <Box m="20px">

        < Box
            border="solid 1px yellow"
            display="grid"
            gridTemplateColumns="1fr 3fr 3fr"
            alignItems="center"
            justifyContent="center"
            borderRadius="10px"
            padding="15px"
            m="20px"
            backgroundColor={colors.primary[400]}
        >
            <Box
                display="flex"
                border="solid 1px red"
                flexDirection="column"
                gap="10px"
                width="50px"
                height="100px"
                objectFit="contain"
            >
                <img src={shoe} alt="" ></img>
                <img src={shoe} alt="" ></img>
                <img src={shoe} alt="" ></img>
            </Box>

            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                // width="50px"
                // height="100px"
                objectFit="contain"
                border="solid 1px blue"
            >
                <img src={shoe} alt="" width="300px"></img>
                {/* <img src={shoe} alt="" ></img>
                <img src={shoe} alt="" ></img> */}
            </Box>
            {/* 
            <Box
                width="50px"
                height="100px"
                objectFit="contain"
                border="solid 1px blue"
                >
                <img src={shoe} alt="" ></img>
            </Box> */}

            {/* <Box
                    component="img"
                    alt='profile'
                    src={shoe}
                    height="40px"
                    width="40px"
                    borderRadius="50%"
                    sx={{ objectFit: "cover" }}
                /> */}

            <Box

                display="flex"
                alignItems="center"
                justifyContent="left"
                border="solid 1px green"
            >
                In Stock<br />
                NIKE<br />
                AIR JORDAN 270<br />
                $350 <br />
                Colors:<br />
                Select size:<br />
                Quantity:<br />
                Add to cart<br />
                Buy Now<br />
            </Box>


        </Box>


    );
};

export default BillAddress;