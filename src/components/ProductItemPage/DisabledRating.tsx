import React from 'react';
import {Rating} from "@mui/material";

type props = {
    rating: number | undefined
}

export const DisabledRating:React.FC<props> = ({rating}:props) => {
    return (
        <Rating
            sx={{color: '#E5D046FF'}}
            value={rating || null}
            readOnly
        />
    );
};
