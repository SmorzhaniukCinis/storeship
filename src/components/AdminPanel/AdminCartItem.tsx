import React, {useState} from 'react';
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import DoneIcon from '@mui/icons-material/Done';
import {cartType} from "../../API/types/cartsTypes";
import {userType} from "../../API/types/userTypes";
import dayjs from "dayjs";
import {cartModal} from "./AdminCartsList";

type props = {
    isDone?: boolean
    cart: cartType
    openModal: (cartModal: cartModal) => void
    user: userType | undefined
}

export const AdminCartItem: React.FC<props> = ({cart, user, openModal}: props) => {

    const [isDone, setIsDone] = useState(false)

    return (
        <Grid xs={12} md={3}>
            <Card elevation={10}>
                <CardContent>
                    <Box display='flex' justifyContent='space-between'>
                        <Typography gutterBottom variant="h5" component="div">
                            Order: {cart.id}
                        </Typography>
                        {isDone && <DoneIcon color='success' fontSize='large'/>}
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                        customer: {user?.username}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        phone: {user?.phone}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        payment: card(success)
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        date: {dayjs(cart.date).format('YYYY/MM/DD HH:mm')}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" variant='outlined' color='info'  onClick={() => openModal({cart, isDone})}>show details</Button>
                    {isDone
                        ? <Button size="small" variant='outlined' color='error' onClick={() => setIsDone(false)}>abolition</Button>
                        : <Button size="small" variant='outlined' color='success' onClick={() => setIsDone(true)}>done!</Button>
                    }
                </CardActions>
            </Card>
        </Grid>
    );
};

