import React, {useCallback, useEffect, useState} from 'react';
import Box from "@mui/material/Box";
import {AdminUserItem} from "./AdminUserItem";
import {AdminSearchField} from "./AdminSearchField";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {usersSagaActions} from "../../redux/users/usersSaga";
import {usersSelectors} from "../../redux/users/usersSelectors";
import UserModal from "./UserModal/UserModal";
import {AdminPanelLoader} from "./AdminPanelLoader";
import {cartSagaActions} from "../../redux/carts/cartsSaga";
import {CartDetailModal} from "./CartModal/CartDetailModal";
import {cartSelectors} from "../../redux/carts/cartsSelectors";
import {SortButton} from "./SortButton";
import {setSortBy} from "../../redux/users/usersSlise";
import {userType} from "../../API/types/userTypes";

type props = {
    searchStr: string
}

export const AdminUserList: React.FC<props> = ({searchStr}: props) => {

    const dispatch = useAppDispatch()
    const users = useAppSelector(usersSelectors.selectUsers)
    const [open, setOpen] = React.useState(false);
    const currentCart = useAppSelector(cartSelectors.selectCurrentCart)
    const isLoading = useAppSelector(usersSelectors.selectIsUsersLoading)
    const sortBy = useAppSelector(usersSelectors.selectSortBy)
    const [isCartOpen, setIsCartOpen] = useState<boolean>(false)
    const [filterUsers, setFilterUsers] = useState<userType[]>([])

    const handleOpen = (userId: number) => {
        setOpen(true);
        dispatch(usersSagaActions.fetchUserById(userId))
    }
    const handleClose = () => setOpen(false);

    const closeCartModal = useCallback(() => {
        setIsCartOpen(false)
    }, [])
    const openCartModal = (cartId: number) => {
        handleClose()
        setIsCartOpen(true)
        dispatch(cartSagaActions.fetchCartById(cartId))
    }

    useEffect(() => {
        dispatch(usersSagaActions.fetchUsers())
    }, [dispatch])

    useEffect(() => {
        if (searchStr) {
            setFilterUsers(users.filter(item => item.username.indexOf(searchStr) !== -1))
        } else {
            setFilterUsers(users)
        }
    }, [searchStr, users])

    return (
        <Box sx={{p: {md: '0 10%', xs: 0}}}>
            <Box display={{md: 'flex', xs: 'block'}} alignItems='center'>
                <AdminSearchField label={'user'}/>
                <Box sx={{pb: 2, mr: 2}}>
                    <SortButton setSortBy={setSortBy} sortBy={sortBy}/>
                </Box>
            </Box>
            {!isLoading
                ? filterUsers.map(user =>
                    <Box key={user.id} onClick={() => handleOpen(user.id)}>
                        <AdminUserItem user={user}/>
                    </Box>)
                : <Box textAlign='center'><AdminPanelLoader/></Box>
            }
            <UserModal open={open} handleClose={handleClose} openCartModal={openCartModal}/>
            <CartDetailModal isModalOpen={isCartOpen} closeModal={closeCartModal} cart={currentCart}/>
        </Box>
    );
};

