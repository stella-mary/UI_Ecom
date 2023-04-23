import { Box, Typography } from "@mui/material";
// import shoe from "path/to/shoe";
import shoe from '../../Img/shoe.jpg'
export default function ProductDetails() {
    return (
        <Box
            sx={{
                display: "flex",
                width: "97%",
                alignItems: "top",
                // justifyContent: "space-between",
                gap: "1%",
                borderRadius: "10px",
                padding: "1%",
                m: "20px",
                backgroundColor: "#222b36",
                // border: "solid 1px yellow",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    width: "10%",
                    // border: "solid 1px red",
                }}
            >
                <img src={shoe} alt="Shoe 1" />
                <img src={shoe} alt="Shoe 2" />
                <img src={shoe} alt="Shoe 3" />
            </Box>

            <Box
                sx={{
                    // border: "solid 1px red",
                    width: "44%",
                    display: "flex",
                    alignItems: "center",
                    objectFit: "cover",
                }}
            >
                <img src={shoe} alt="Shoe 4" width="100%" />
            </Box>

            <Box
                sx={{
                    // border: "solid 1px green",
                    width: "44%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "left",
                    marginLeft: "10px",
                    justifyContent: "center",
                }}
            >
                <Typography><span class="bgcolor5">In Stock</span></Typography>
                <Typography variant="h4" color="#7c91a6" marginTop="20px">NIKE</Typography>
                <Typography variant="h2" marginTop="10px"><b>Air Jordan 270</b></Typography>
                <Typography variant="h4" marginTop="5px" color="#2499ef">$350</Typography>
                <Typography variant="h5" marginTop="20px">Colors:</Typography>
                <Typography variant="h5" marginTop="20px">Select size:<span class="space" />
                    <select>
                        <option value="">40</option>
                        <option value="">41</option>
                        <option value="">42</option>
                    </select>
                </Typography>
                <Typography variant="h5" marginTop="20px">Quantity:</Typography>
                <Box
                    display="flex"
                    justifyContent="space-between"
                    marginTop="20px"
                    width="50%"
                >
                    <Typography><span class="bgcolor6">Add to cart</span></Typography>
                    <Typography><span class="bgcolor5">Buy Now</span></Typography>
                </Box>
            </Box>
        </Box>
    );
}
