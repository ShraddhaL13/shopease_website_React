import { Box, Grid, Heading, Skeleton, Stack } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";

const YourGadgetsStore = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .get("https://shopease-5vqg.onrender.com/Your_Gadgets_Store")
            .then((res) => {
                setData(res.data);
                setLoading(false);
            })
            .catch((e) => {
                console.log("error is", e);
                setLoading(false);
            });
    }, []);

    return (
        <Box mt={"30px"} ml={"1%"} mr={"1%"} overflow={"hidden"}>
            <Heading mb={"15px"} size={"md"}>
                Your Gadgets Store
            </Heading>
            {loading ? (
                <Stack>
                    <Skeleton startColor="blue.100" endColor="blue.600" height="20px" />
                    <Skeleton startColor="blue.100" endColor="blue.600" height="20px" />
                    <Skeleton startColor="blue.100" endColor="blue.600" height="20px" />
                    <Skeleton startColor="blue.100" endColor="blue.600" height="20px" />
                    <Skeleton startColor="blue.100" endColor="blue.600" height="20px" />
                    <Skeleton startColor="blue.100" endColor="blue.600" height="20px" />
                    <Skeleton startColor="blue.100" endColor="blue.600" height="20px" />
                </Stack>
            ) : (
                <Grid
                    templateColumns={{
                        sm: "repeat(1, 1fr)",
                        md: "repeat(3, 1fr)",
                        lg: "repeat(6, 1fr)", }}>

                    {data.map((e) => (
                        <ProductCard  key={e.id} title={e.title}  price={e.price} real_price={e.real_price}
                            image={e.image} discount={e.discount_off}/>
                    ))}
                </Grid>
            )}
        </Box>
    );
};

export default YourGadgetsStore;
