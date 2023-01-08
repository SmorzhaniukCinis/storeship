import React, {FC} from 'react';
import Box from '@mui/material/Box';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";
import {cleanCart} from "../../redux/persist/persistSlise";
import {useAppDispatch} from "../../redux/hooks";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: {md: '40%', xs: '80%'},
    bgcolor: 'background.paper',
    borderRadius: '10px',
    boxShadow: 24,
    p: 6,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
}

type props = {
    isModalOpen: boolean
    setIsModalOpen: (isOpen: boolean) => void
}

export const SuccessModal: FC<props> = ({isModalOpen, setIsModalOpen}: props) => {

    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const finishShopping = () => {
        navigate('/')
        dispatch(cleanCart())
    }

    return (
        <div>
            <Modal open={isModalOpen} onClose={setIsModalOpen}>
                <Box sx={style}>
                    <Typography sx={{fontSize: 40, color: '#2e9d47', textAlign: 'center'}}>
                        <CheckCircleOutlineIcon
                            sx={{fontSize: 50, color: '#2e9d47', position: 'relative', top: 10, right: 5}}/>
                        Success
                    </Typography>
                    <Button onClick={finishShopping} variant='outlined' color='success'
                            sx={{width: '50%', p: 1, mt: 5, fontWeight: 'bold', fontSize: 20}}
                    >
                        OK!
                    </Button>
                </Box>
            </Modal>
        </div>
    );
};

