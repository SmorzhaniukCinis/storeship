import React, {useEffect} from 'react';
import Box from "@mui/material/Box";
import {SortBar} from "./SortBar";
import {AdminUserItem} from "./AdminUserItem";
import {AdminSearchField} from "./AdminSearchField";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {usersSagaActions} from "../../redux/users/usersSaga";
import {usersSelectors} from "../../redux/users/usersSelectors";
import UserModal from "./UserModal/UserModal";
import {AdminPanelLoader} from "./AdminPanelLoader";
import {CartList} from "./UserModal/CartList";

type props = {
    searchStr: string
}


export const AdminUserList: React.FC<props> = ({searchStr}: props) => {

    const dispatch = useAppDispatch()
    const users = useAppSelector(usersSelectors.selectUsers)
    const [open, setOpen] = React.useState(false);
    const isLoading = useAppSelector(usersSelectors.selectIsUsersLoading)

    const handleOpen = (userId: number) => {
        setOpen(true);
        dispatch(usersSagaActions.fetchUserById(userId))
    }
    const handleClose = () => setOpen(false);

    useEffect(() => {
        dispatch(usersSagaActions.fetchUsers())
    }, [dispatch])

    return (
        <Box sx={{p: {md: '0 10%', xs: 0}}}>
            <Box display={{md: 'flex', xs: 'block'}} justifyContent='space-between' alignItems='center'>
                <SortBar/>
                <AdminSearchField/>
            </Box>
            {!isLoading
                ? users.map(user =>
                    <Box key={user.id} onClick={() => handleOpen(user.id)}>
                        <AdminUserItem user={user}/>
                    </Box>)
                : <Box textAlign='center'><AdminPanelLoader/></Box>
            }
            <UserModal open={open} handleClose={handleClose}/>
        </Box>
    );
};

