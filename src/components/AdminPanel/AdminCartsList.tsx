import React, {useEffect, useState} from 'react';
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
dayjs.extend(isBetween)

type props = {
    searchStr: string
}


export const AdminCartsList: React.FC<props> = ({searchStr}: props) => {

    const dispatch = useAppDispatch()
    const carts = useAppSelector(cartSelectors.selectCarts)
    const user = useAppSelector(usersSelectors.selectUsers)
    const dateRange = useAppSelector(cartSelectors.selectDateRange)
    const [currentCarts, setCurrentCarts] = useState<cartType[] | null>(null)

    useEffect(() => {
        dispatch(cartSagaActions.fetchCarts())
        dispatch(usersSagaActions.fetchUsers())
    }, [dispatch])

    useEffect(() => {
        setCurrentCarts(
            carts.filter(cart =>
                dayjs(cart.date).isBetween(dateRange.startDate, dateRange.endDate)
                )
        )


        console.log(
            dayjs('2010-10-20').isBetween('2010-10-19', '2010-10-18')
        )
    }, [dateRange.endDate, carts, dateRange.startDate])

    return (
        <Box>
            <DatePicker/>
            <Grid container spacing={3}>
                {currentCarts?.map(cart =>
                    <AdminCartItem cart={cart}
                    key={cart.id}
                    user={user.find(user => user.id === cart.userId)}/>)
                }
            </Grid>
        </Box>

    );
};

