import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import {Card, CardActionArea, CardContent, CardMedia, Paper} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80vw',
    height: '80vh',
    bgcolor: 'secondary.main',
    borderRadius: 3,
    boxShadow: 24,
    p: 2,

};

const ProductsList = {
    p: '4%',
    overflowY: 'auto',
    overflowX: 'hidden',
    maxHeight: '60vh',
    '&::-webkit-scrollbar': {
        width: '3px',
    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'primary.dark',
        borderRadius: '2px',
    }
}

type props = {
    isOpen: boolean
    closeCart: (isOpen:boolean) => void
}

export const CartPage = ({isOpen, closeCart}: props) => {

    return (
        <div>
            <Modal
                open={isOpen}
                onClose={closeCart}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box display={'flex'} justifyContent='space-between'>
                        <Typography sx={{pl: '4%', pt: '1%'}} variant={'h4'}>Cart</Typography>
                        <CloseIcon sx={{fontSize: 30, color: '#ad9c9c'}}/>
                    </Box>
                    <Box sx={ProductsList}>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid xs={12} md={4}>
                                img
                            </Grid>
                            <Grid xs={12} md={4}>
                                name
                            </Grid>
                            <Grid xs={12} md={4}>
                                prise
                            </Grid>
                        </Grid><Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid xs={12} md={4}>
                                img
                            </Grid>
                            <Grid xs={12} md={4}>
                                name
                            </Grid>
                            <Grid xs={12} md={4}>
                                prise
                            </Grid>
                        </Grid><Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid xs={12} md={4}>
                                img
                            </Grid>
                            <Grid xs={12} md={4}>
                                name
                            </Grid>
                            <Grid xs={12} md={4}>
                                prise
                            </Grid>
                        </Grid><Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid xs={12} md={4}>
                                img
                            </Grid>
                            <Grid xs={12} md={4}>
                                name
                            </Grid>
                            <Grid xs={12} md={4}>
                                prise
                            </Grid>
                        </Grid><Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid xs={12} md={4}>
                                img
                            </Grid>
                            <Grid xs={12} md={4}>
                                name
                            </Grid>
                            <Grid xs={12} md={4}>
                                prise
                            </Grid>
                        </Grid><Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid xs={12} md={4}>
                                img
                            </Grid>
                            <Grid xs={12} md={4}>
                                name
                            </Grid>
                            <Grid xs={12} md={4}>
                                prise
                            </Grid>
                        </Grid><Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid xs={12} md={4}>
                                img
                            </Grid>
                            <Grid xs={12} md={4}>
                                name
                            </Grid>
                            <Grid xs={12} md={4}>
                                prise
                            </Grid>
                        </Grid><Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid xs={12} md={4}>
                                img
                            </Grid>
                            <Grid xs={12} md={4}>
                                name
                            </Grid>
                            <Grid xs={12} md={4}>
                                prise
                            </Grid>
                        </Grid><Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid xs={12} md={4}>
                                img
                            </Grid>
                            <Grid xs={12} md={4}>
                                name
                            </Grid>
                            <Grid xs={12} md={4}>
                                prise
                            </Grid>
                        </Grid><Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid xs={12} md={4}>
                                img
                            </Grid>
                            <Grid xs={12} md={4}>
                                name
                            </Grid>
                            <Grid xs={12} md={4}>
                                prise
                            </Grid>
                        </Grid><Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid xs={12} md={4}>
                                img
                            </Grid>
                            <Grid xs={12} md={4}>
                                name
                            </Grid>
                            <Grid xs={12} md={4}>
                                prise
                            </Grid>
                        </Grid><Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid xs={12} md={4}>
                                img
                            </Grid>
                            <Grid xs={12} md={4}>
                                name
                            </Grid>
                            <Grid xs={12} md={4}>
                                prise
                            </Grid>
                        </Grid><Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid xs={12} md={4}>
                                img
                            </Grid>
                            <Grid xs={12} md={4}>
                                name
                            </Grid>
                            <Grid xs={12} md={4}>
                                prise
                            </Grid>
                        </Grid><Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid xs={12} md={4}>
                                img
                            </Grid>
                            <Grid xs={12} md={4}>
                                name
                            </Grid>
                            <Grid xs={12} md={4}>
                                prise
                            </Grid>
                        </Grid><Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid xs={12} md={4}>
                                img
                            </Grid>
                            <Grid xs={12} md={4}>
                                name
                            </Grid>
                            <Grid xs={12} md={4}>
                                prise
                            </Grid>
                        </Grid><Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid xs={12} md={4}>
                                img
                            </Grid>
                            <Grid xs={12} md={4}>
                                name
                            </Grid>
                            <Grid xs={12} md={4}>
                                prise
                            </Grid>
                        </Grid><Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid xs={12} md={4}>
                                img
                            </Grid>
                            <Grid xs={12} md={4}>
                                name
                            </Grid>
                            <Grid xs={12} md={4}>
                                prise
                            </Grid>
                        </Grid><Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid xs={12} md={4}>
                                img
                            </Grid>
                            <Grid xs={12} md={4}>
                                name
                            </Grid>
                            <Grid xs={12} md={4}>
                                prise
                            </Grid>
                        </Grid><Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid xs={12} md={4}>
                                img
                            </Grid>
                            <Grid xs={12} md={4}>
                                name
                            </Grid>
                            <Grid xs={12} md={4}>
                                prise
                            </Grid>
                        </Grid><Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid xs={12} md={4}>
                                img
                            </Grid>
                            <Grid xs={12} md={4}>
                                name
                            </Grid>
                            <Grid xs={12} md={4}>
                                prise
                            </Grid>
                        </Grid><Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid xs={12} md={4}>
                                img
                            </Grid>
                            <Grid xs={12} md={4}>
                                name
                            </Grid>
                            <Grid xs={12} md={4}>
                                prise
                            </Grid>
                        </Grid><Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid xs={12} md={4}>
                                img
                            </Grid>
                            <Grid xs={12} md={4}>
                                name
                            </Grid>
                            <Grid xs={12} md={4}>
                                prise
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
};
