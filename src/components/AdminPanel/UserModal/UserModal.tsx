import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {useAppSelector} from "../../../redux/hooks";
import {AdminPanelLoader} from "../AdminPanelLoader";
import {appSelectors} from "../../../redux/app/appSelectors";
import {UserData} from "./UserData";

type props = {
    open: boolean
    handleClose: () => void
}

const UserModal:React.FC<props> = ({handleClose, open}:props) => {

    const isLoading = useAppSelector(appSelectors.selectIsLoading)

    if(isLoading) return <Box textAlign='center'><AdminPanelLoader/></Box>
    return (
        <div>
            <Modal open={open} onClose={handleClose}>
                <Box>
                    <UserData/>
                </Box>
            </Modal>
        </div>
    )
};

export default UserModal;