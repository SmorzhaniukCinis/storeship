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
import {AdminPanelLoader} from "./AdminPanelLoader";
import {CartDetailModal} from "./ProductModal/CartDetailModal";
import {setCurrentUser} from "../../redux/users/usersSlise";

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
    const [modalData, setModalData] = React.useState<cartModal | null>(null);
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const openModal = ({cart, isDone}:cartModal) => {
        setIsModalOpen(true);
        setModalData({cart, isDone})
    }
    const closeModal = useCallback(() => {
        setIsModalOpen(false)
        setModalData(null)
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
                ? <AdminPanelLoader/>
                : <Grid container spacing={3} textAlign='start'>
                    {currentCarts?.map(cart =>
                        <AdminCartItem cart={cart}
                                       openModal={openModal}
                                       key={cart.id}
                                       user={users.find(user => user.id === cart.userId)}/>)
                    }
                </Grid>
            }
            <CartDetailModal modalData={modalData} isModalOpen={isModalOpen} closeModal={closeModal}/>
        </Box>

    );
};

