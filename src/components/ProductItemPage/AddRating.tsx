import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import Button from "@mui/material/Button";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AddIcon from '@mui/icons-material/Add';
import {Popover, Rating} from "@mui/material";
import Typography from "@mui/material/Typography";
import {UseFormClearErrors, UseFormSetValue} from "react-hook-form";
import {productFeedbackType} from "../../redux/products/types";

type props = {
    setValue: UseFormSetValue<productFeedbackType>
    clearErrors: UseFormClearErrors<productFeedbackType>
}

export const AddRating:React.FC<props> = ({setValue, clearErrors}: props) => {

    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    const [rating, setRating] = React.useState<number | null>(null);



    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button color='success' variant='outlined' aria-describedby={id} onClick={handleClick}>
                <AddIcon sx={{color: '#E5D046FF', position: 'relative', right: -9}}/>
                <StarBorderIcon sx={{color: '#E5D046FF'}} fontSize="large"/>
                <Typography p={0.5} fontSize={20}>{rating}</Typography>
            </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <Box p={2}>
                    <Typography sx={{textAlign: 'center'}}>
                        Add rating
                    </Typography>
                    <Rating
                        sx={{color: '#E5D046FF'}}
                        name="simple-controlled"
                        value={rating}
                        onChange={(event, newValue) => {
                            setRating(newValue);
                            // @ts-ignore
                            setValue('rating', newValue)
                            clearErrors('rating')
                        }}
                    />
                </Box>
            </Popover>
        </div>

    );
}



