import React from 'react';
import Box from "@mui/material/Box";
import {Paper, styled} from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import devicesBG from '../../assets/devicesBG.jpeg'
import manClothingBG from '../../assets/manClothingBG.jpg'
import jewelryBG from '../../assets/jewelryBG.jpg'
import womanClothingBG from '../../assets/womanClothingBG.jpg'
import Typography from "@mui/material/Typography";

const categories = [
    {name: 'Electronics', url: devicesBG},
    {name: 'Jewelry', url: jewelryBG},
    {name: "Man's Clothing", url: manClothingBG},
    {name: "Woman's Clothing", url: womanClothingBG}
]

export const CategoryPage = () => {

    const Category = styled(Paper)(({theme}) => ({
        color: 'black',
        padding: theme.spacing(1),
        height: 200,
        textAlign: 'center',
        cursor: 'pointer',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        transition: `${theme.transitions.create(['background-color', 'transform', 'opacity'], {
            duration: theme.transitions.duration.standard,
          })}`,
        opacity: 0.6,
        '&:hover':{
            transitions: '0.5 s',
            opacity: 0.8,
            backgroundColor: 'rgb(26,32,39, 0.8)',
            transform: `scale(1.03)`
        }
    }));


    return (
        <Box sx={{width: '100%', pt: 7, pb: 5}}>
            <Grid container rowSpacing={4} columnSpacing={{xs: 2, sm: 4, md: 6}}>
                {
                    categories.map(category =>
                        <Grid key={category.name}  xs={12} sm={6}>
                            <Category elevation={20} sx={{backgroundImage: `url(${category.url})`}}>
                                <Typography sx={{fontSize: 45, backgroundColor: 'rgba(252,248,248,0.5)'}}>
                                    {category.name}
                                </Typography>
                            </Category>
                        </Grid>)
                }
            </Grid>
        </Box>
    );
};
