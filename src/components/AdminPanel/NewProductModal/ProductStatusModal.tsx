import React from 'react';
import {Paper} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const successModalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 300,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
};

type props = {
    open: boolean
    isSuccess: boolean
    handleClose: () => void
}

export const ProductStatusModal:React.FC<props> = ({open, isSuccess, handleClose}:props) => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
        >
            <Paper sx={successModalStyle}>
                {isSuccess
                    ? <CheckCircleIcon sx={{fontSize: 40, mt: 0.6, mr: 1, color: '#53a84b'}}/>
                    : <ErrorIcon sx={{fontSize: 40, mr: 1, color: '#e14e4e'}}/>}
                <Typography
                    sx={{fontSize: 30, fontWeight: 'bold'}}
                    color={isSuccess ? '#53a84b' : '#e14e4e'}
                >
                    {isSuccess ? 'Success' : 'Some error'}
                </Typography>
            </Paper>
        </Modal>
    );
};

