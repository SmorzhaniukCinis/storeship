import React from 'react';
import {Paper} from "@mui/material";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {useNavigate} from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {useAppDispatch} from "../../redux/hooks";
import {setCurrentUser} from "../../redux/persist/persistSlise";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: 300,
    maxWidth: 500,
    boxShadow: 50,
    p: 4,
    borderRadius: 2
};

type props = {
    isOpen: boolean
    closeModal: () => void
}

export const LogoutModal: React.FC<props> = ({isOpen, closeModal}: props) => {

    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const logout = () => {
        dispatch(setCurrentUser(null))
        navigate('/auth')
        closeModal()
        localStorage.clear()
    }
    return (
        <Modal
            open={isOpen}
            onClose={closeModal}
        >
            <Paper sx={style}>
                <Typography pb={5} fontSize={25} textAlign='center'>
                    Do you really want to logout?
                </Typography>
                <Box display='flex' justifyContent='space-around'>
                    <Button onClick={logout} variant='outlined' color='success'>yes</Button>
                    <Button onClick={closeModal} variant='outlined' color='error'>No</Button>
                </Box>
            </Paper>
        </Modal>
    );
}

