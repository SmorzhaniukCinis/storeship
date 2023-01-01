import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {useAppDispatch} from "../../redux/hooks";
import {setCurrentUser} from "../../redux/app/appSlise";
import {useNavigate} from "react-router-dom";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: {xs: '90%', md: 400},
    bgcolor: 'background.paper',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
};

type props = {
    open: boolean
    handleClose: () => void
}

export const DeleteUserModal:React.FC<props> = ({open, handleClose}: props) => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const deleteUser = () => {
        dispatch(setCurrentUser(null))
        navigate('/auth')
        localStorage.clear()
    }

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography sx={{fontSize: 30, textAlign: 'center'}}>
                        Are you really want delete account ?
                    </Typography>
                    <Box display='flex' justifyContent='space-around' sx={{pt: 3}}>
                        <Button variant='contained' onClick={handleClose} >Cancel</Button>
                        <Button variant='contained' onClick={deleteUser} color='error'>Delete</Button>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}
