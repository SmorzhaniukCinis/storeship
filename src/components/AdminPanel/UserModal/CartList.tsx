import React, {useEffect} from 'react';
import {Typography} from "@mui/material";
import Box from "@mui/material/Box";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import {useAppDispatch, useAppSelector} from "../../../redux/hooks";
import {cartSagaActions} from "../../../redux/carts/cartsSaga";
import {cartSelectors} from "../../../redux/carts/cartsSelectors";
import dayjs from "dayjs";
import {setCarts} from "../../../redux/carts/cartSlise";
import {AdminPanelLoader} from "../AdminPanelLoader";
import {usersSelectors} from "../../../redux/users/usersSelectors";

type props = {
    userId: number | undefined
    openCartModal: (cartId: number) => void
}

export const CartList: React.FC<props> = ({userId, openCartModal}: props) => {

    const dispatch = useAppDispatch()
    const carts = useAppSelector(cartSelectors.selectCarts)
    const isLoading = useAppSelector(usersSelectors.selectIsUsersLoading)

    useEffect(() => {
        if (userId) {
            dispatch(cartSagaActions.fetchCartByUser(userId))
        }
        return function cleanup () {
            dispatch(setCarts([]))
        }
    }, [userId, dispatch])

    if(isLoading) return <Box textAlign='center'><AdminPanelLoader/></Box>
    return (
        <Box sx={{borderTop: '1px solid', mt: 1, pt: 1}}>
            {carts
                ? <Typography variant='h5'>Carts</Typography>
                : <Typography variant='h5'>No cart</Typography>}
            <List>
                {carts.map(cart => <ListItem key={cart.id} disablePadding>
                        <ListItemButton onClick={() => openCartModal(cart.id)}>
                            <ListItemIcon>
                                <ShoppingCartCheckoutIcon/>
                            </ListItemIcon>
                            <ListItemText primary={`№ ${cart.id}`}
                                          secondary={dayjs(cart.date).format('YYYY/MM/DD - hh:mm')}/>
                        </ListItemButton>
                    </ListItem>
                )}
            </List>
        </Box>
    )
}