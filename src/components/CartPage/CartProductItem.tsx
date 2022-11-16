import React from 'react';
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import {TextField} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";

const te = 'https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg'

export const CartProductItem = () => {
    return (
        <Grid container rowSpacing={1} columnSpacing={{md: 4}} paddingTop={2} paddingBottom={{md: 2}}
              sx={{borderBottom: '1px solid #ad9c9c', width: '99%'}}>
            <Grid xs={12} md={3} textAlign='center'>
                <img style={{maxWidth: '100%', height: 80}} src={te} alt=""/>
            </Grid>
            <Grid overflow='hidden' xs={12} md={5}>
                <Typography fontSize={28} height={{sx: '300px', md: 80}} textOverflow='hidden'>
                    Mens Cotton Jacket
                </Typography>
            </Grid>
            <Grid xs={12} md={3} textAlign='center'>
                <Typography fontSize={20}>
                    Prise: 133$
                </Typography>
                <Box>
                    <Button sx={{p: 1.1, borderRadius: 1}}>
                        <AddIcon sx={{color: 'secondary.dark'}}/>
                    </Button>
                    <TextField type={'number'} size='small' sx={{width: 60, m: '0 5px'}}
                               variant="outlined"/>
                    <Button sx={{p: 1.1, borderRadius: 1}}>
                        <RemoveIcon sx={{color: 'secondary.dark'}}/>
                    </Button>
                </Box>
            </Grid>
            <Grid xs={12} md={1} textAlign='center' marginTop={{md: 2}}>
                <Button>
                    <DeleteIcon sx={{color: 'secondary.dark', fontSize: 35}}/>
                </Button>
            </Grid>
        </Grid>
    );
};

