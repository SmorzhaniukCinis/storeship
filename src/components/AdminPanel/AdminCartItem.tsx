import React, {useEffect} from 'react';
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import DoneIcon from '@mui/icons-material/Done';
import {cartType} from "../../API/types/cartsTypes";
import {useAppDispatch} from "../../redux/hooks";
import {usersSagaActions} from "../../redux/users/usersSaga";
import {userType} from "../../API/types/userTypes";
import dayjs from "dayjs";
import {useNavigate} from "react-router-dom";

type props = {
    isDone?: boolean
    cart: cartType
    user: userType | undefined
}

export const AdminCartItem: React.FC<props> = ({isDone, cart, user}: props) => {

    const navigate = useNavigate()

    return (
        <Grid xs={12} md={3}>
            <Card elevation={10}>
                <CardContent sx={{cursor: 'pointer'}} onClick={() => navigate(`/cart/${cart.id}`)}>
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
                    <Button size="small">show details</Button>
                    <Button size="small">done!</Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

