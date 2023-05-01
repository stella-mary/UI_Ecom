import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import React, { useState } from 'react';
import { mockDataShop1 } from "../../../data/mockData";

const Shop1 = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);


    const [cart, setCart] = useState(mockDataShop1);

    const increase = (id) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const decrease = (id) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity - 1 } : item
            )
        );
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id && item.quantity === 1 ? { ...item, show: true } : item
            )
        );
    };

    return (
        <Box m="20px">
            <Box
                gridColumn="span 8"
                gridRow="span 2"
                display="grid"
                gridTemplateColumns="1fr 1fr 1fr"
                gap="20px"
            // width="100px"
            >
                {cart.map((item) => (
                    <div key={item.id}>

                        < Box
                            marginBottom="15px"
                            flexDirection="column"
                            borderRadius="20px"
                            backgroundColor={colors.primary[400]}
                            key={item.id}
                        >
                            <Box>
                                <Typography variant="h5" fontWeight="600" color={colors.grey[100]} >
                                    <div className="image2">
                                        <img src={item.ProductImage} width={270} height={200} />
                                    </div>
                                </Typography>
                            </Box>
                            <Box
                                display="flex"
                                justifyContent="space-between"
                            >
                                <Typography variant="h3" fontWeight="400" marginBottom="30px" marginTop="30px" fontSize="13px" marginLeft="20px" color={colors.greenAccent[100]}>
                                    {item.ProductName}
                                    <br />
                                    <br />
                                    {item.ProductPrice}
                                </Typography>

                                {/* {item.quantity < 1 ? (

                                    <Box variant="h3" fontWeight="400"
                                        fontSize="15px"
                                        color={colors.grey[100]}
                                        border="solid 2px #2f4365"
                                        display="flex"
                                        flexDirection="row"
                                        borderRadius="10px"
                                        justifyContent="space-between"
                                        marginTop="30px"
                                        marginRight="5px"
                                        textAlign="left"
                                        width="100px"
                                        height="40px"
                                        cursor="pointer"
                                        padding="5px"
                                    >
                                        <div onClick={() => increase(item.id)}>+</div>
                                    </Box>

                                ) : (

                                    <Box variant="h3" fontWeight="400"
                                        fontSize="15px"
                                        color={colors.grey[100]}
                                        border="solid 2px #2f4365"
                                        display="flex"
                                        flexDirection="row"
                                        borderRadius="10px"
                                        justifyContent="space-between"
                                        marginTop="30px"
                                        marginRight="5px"
                                        width="100px"
                                        height="40px"
                                        cursor="pointer"
                                        padding="5px"
                                    >
                                        <div onClick={() => increase(item.id)}>+</div>
                                        <span className="space" />
                                        {item.quantity}
                                        <span className="space" />
                                        <div onClick={() => decrease(item.id)}>-</div>

                                    </Box> */}


                                {item.quantity >= 1 ? (
                                    // <Box variant="h3" fontWeight="400" fontSize="15px" color={colors.grey[100]} marginTop="10px">
                                    <Box variant="h3" fontWeight="400"
                                        fontSize="15px"
                                        color={colors.grey[100]}
                                        border="solid 2px #2f4365"
                                        display="flex"
                                        flexDirection="row"
                                        borderRadius="10px"
                                        justifyContent="space-between"
                                        marginTop="30px"
                                        marginRight="5px"
                                        textAlign="left"
                                        width="100px"
                                        height="40px"
                                        padding="5px"
                                    >
                                        <div className="bgColor10" onClick={() => decrease(item.id)}>-</div>
                                        <span className="space" />
                                        {item.quantity}
                                        <span className="space" />
                                        <div onClick={() => increase(item.id)}>+</div>

                                    </Box>
                                ) : (
                                    <Box variant="h3" fontWeight="400"
                                        fontSize="15px"
                                        color={colors.grey[100]}
                                        // border="solid 2px #2f4365"

                                        borderRadius="10px"
                                        // justifyContent="space-between"
                                        marginTop="30px"
                                        marginRight="5px"
                                        textAlign="right"
                                        width="100px"
                                        height="40px"
                                        cursor="pointer"
                                        padding="5px"
                                    >
                                        <button className="bgColor" onClick={() => increase(item.id)}>+</button>
                                    </Box>
                                )}

                                {/* )} */}
                            </Box>
                        </Box>
                    </div>
                ))
                }

            </Box >

        </Box >


    );
};

export default Shop1;