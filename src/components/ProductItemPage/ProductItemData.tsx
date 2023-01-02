import React from 'react';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import {DisabledRating} from "./DisabledRating";
import {productType} from "../../API/types/productsType";

type props = {
    product: productType | null
}

export const ProductItemData:React.FC<props> = ({product}:props) => {
    return (
        <div>
            <Typography fontSize={30}>{product?.title}</Typography>
            <div style={{display: 'flex', marginTop: 10}}>
                <Typography sx={{mr: 2}} fontSize={20} lineHeight={2}>Price:{product?.price}$</Typography>
                <Button color='success' variant='outlined'>add to card</Button>
            </div>
            <div style={{maxWidth: 210, display: 'flex', justifyContent: 'space-between'}}>
                <Tooltip followCursor enterDelay={500} title={`Votes: ${product?.rating.count}`}>
                    <Typography sx={{width: 120, pt: '20px', pb: 1}}>
                        <DisabledRating rating={product?.rating.rate} />
                    </Typography>
                </Tooltip>
            </div>
            <Typography>{product?.description}</Typography>
        </div>
    );
};

