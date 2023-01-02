import React from 'react';
import Typography from "@mui/material/Typography";
import {Paper} from "@mui/material";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import {DisabledRating} from "./DisabledRating";
import {productType} from "../../API/types/productsType";
import {useAppSelector} from "../../redux/hooks";
import {productsSelectors} from "../../redux/products/productsSelectors";

type props = {
    product: productType | null
}

export const ProductFeedback: React.FC<props> = ({product}: props) => {

    const productFeedback = useAppSelector(productsSelectors.selectProductFeedback)

    return (
        <div>
            <div>
                <Typography sx={{fontSize: 30,}}>Feedbacks</Typography>
            </div>

            {productFeedback.map(feedback =>
                <Paper elevation={3} sx={{bgcolor: 'secondary.main', p: 2}}>
                    <Box display='flex' sx={{pb: 1}}>
                        <Avatar sx={{mt: 0.5}} alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
                        <Box sx={{ml: 1}}>
                            <Typography sx={{ml: 0.5}}>{feedback.username}</Typography>
                            <DisabledRating rating={feedback.rating}/>
                        </Box>
                    </Box>
                    <Typography>
                        {feedback.feedback}
                    </Typography>
                </Paper>
            )}
        </div>
    );
};

