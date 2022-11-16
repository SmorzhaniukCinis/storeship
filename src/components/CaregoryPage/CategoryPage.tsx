import React from 'react';
import Box from "@mui/material/Box";
import Grid from '@mui/material/Unstable_Grid2';
import devicesBG from '../../assets/devicesBG.jpeg'
import manClothingBG from '../../assets/manClothingBG.jpg'
import jewelryBG from '../../assets/jewelryBG.jpg'
import womanClothingBG from '../../assets/womanClothingBG.jpg'
import {CategoryItem} from "./CategoryItem";

const categories = [
    {name: 'Electronics', url: devicesBG, pageLink: 'products/electronics'},
    {name: 'Jewelry', url: jewelryBG, pageLink: 'products/jewelery'},
    {name: "Man's Clothing", url: manClothingBG, pageLink: 'products/men-clothing'},
    {name: "Woman's Clothing", url: womanClothingBG, pageLink: 'products/women-clothing'}
]

export const CategoryPage = () => {

    return (
        <Box sx={{width: '100%', pt: 7, pb: 5}}>
            <Grid container rowSpacing={4} columnSpacing={{xs: 2, sm: 4, md: 6}}>
                {categories.map(category => <CategoryItem category={category}/>)}
            </Grid>
        </Box>
    );
};
