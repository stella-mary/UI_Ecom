import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import React, { useState } from 'react';
import { mockDataShop1 } from "../../../data/mockData";

const Shop1 = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);


    const [show, setShow] = useState(false);


    const [cart, setCart] = useState(mockDataShop1);

    // const displayButton = (id) => {
    //     console.log("addbutton clicked")
    //     setCart((prevCart) =>
    //         prevCart.map((item) =>
    //             item.id === id ? { ...item, show: !item.show } : item
    //         )
    //     );
    // }

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
    };

    // const increase = (id) => {
    //     setCart((prevCart) =>
    //         prevCart.map((item) =>
    //             item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    //         )
    //     );
    // };

    // const decrease = (id) => {
    //     setCart((prevCart) =>
    //         prevCart.map((item) =>
    //             item.id === id ? { ...item, quantity: item.quantity - 1 } : item
    //         )
    //     );
    //     setCart((prevCart) =>
    //         prevCart.map((item) =>
    //             item.id === id && item.quantity === 1 ? { ...item, show: true } : item
    //         )
    //     );
    // };


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
                {mockDataShop1.map((item) => (
                    <div key={item.id}>

                        < Box
                            // display="flex"
                            // justifyContent="space-between"
                            marginBottom="15px"
                            flexDirection="column"
                            borderRadius="20px"
                            // padding="15px"
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
                                <Typography variant="h3" fontWeight="400" marginBottom="30px" marginTop="30px" fontSize="15px" marginLeft="20px" color={colors.greenAccent[100]}>
                                    {item.ProductName}
                                    <br />
                                    <br />
                                    {item.ProductPrice}
                                </Typography>



                                {item.quantity >= 1 && item.show ? (
                                    <Box variant="h3" fontWeight="400" fontSize="15px" color={colors.grey[100]} marginTop="10px">
                                        <button className="bgColor" onClick={() => increase(item.id)}>+</button>
                                        <span className="space" />
                                        {item.quantity}
                                        <span className="space" />
                                        <button className="bgColor" onClick={() => decrease(item.id)}>-</button>
                                    </Box>
                                ) : (
                                    <Box>
                                        <button onClick={() => setShow(item.id)}>Add to cart</button>
                                    </Box>
                                )}
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