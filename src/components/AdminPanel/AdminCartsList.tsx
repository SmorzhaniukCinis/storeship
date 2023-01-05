import React, {useCallback, useEffect, useState} from 'react';
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import {AdminCartItem} from "./AdminCartItem";
import {DatePicker} from "./DatePicker";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {cartSagaActions} from "../../redux/carts/cartsSaga";
import {cartSelectors} from "../../redux/carts/cartsSelectors";
import {usersSagaActions} from "../../redux/users/usersSaga";
import {usersSelectors} from "../../redux/users/usersSelectors";
import {cartType} from "../../API/types/cartsTypes";
import dayjs from "dayjs";
import isBetween from 'dayjs/plugin/isBetween'
import {SmallLoader} from "./SmallLoader";
import {CartDetailModal} from "./CartModal/CartDetailModal";

dayjs.extend(isBetween)

export type cartModal = {
    cart: cartType
    isDone: boolean
}

export const AdminCartsList = () => {

    const dispatch = useAppDispatch()
    const carts = useAppSelector(cartSelectors.selectCarts)
    const users = useAppSelector(usersSelectors.selectUsers)
    const dateRange = useAppSelector(cartSelectors.selectDateRange)
    const isLoading = useAppSelector(cartSelectors.selectIsCartLoading)
    const [currentCarts, setCurrentCarts] = useState<cartType[] | null>(null)
    const [cartModalData, setCartModalData] = React.useState<cartType | null>(null);
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const openModal = ({cart}:cartModal) => {
        setIsModalOpen(true);
        setCartModalData(cart)
    }
    const closeModal = useCallback(() => {
        setIsModalOpen(false)
        setCartModalData(null)
    }, [])


    useEffect(() => {
        dispatch(cartSagaActions.fetchCarts())
        dispatch(usersSagaActions.fetchUsers())
    }, [dispatch])

    useEffect(() => {
        setCurrentCarts(carts.filter(cart => dayjs(cart.date).isBetween(dateRange.startDate, dateRange.endDate)))
    }, [dateRange.endDate, carts, dateRange.startDate])

    return (
        <Box textAlign='center'>
            <DatePicker/>
            {isLoading
                ? <SmallLoader/>
                : <Grid container spacing={3} textAlign='start'>
                    {currentCarts?.map(cart =>
                        <AdminCartItem cart={cart}
                                       openModal={openModal}
                                       key={cart.id}
                                       user={users.find(user => user.id === cart.userId)}/>)
                    }
                </Grid>
            }
            <CartDetailModal cart={cartModalData} isModalOpen={isModalOpen} closeModal={closeModal}/>
        </Box>

    );
};

