import React, {FC} from 'react';
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import {CardContent, Rating} from "@mui/material";
import {productType} from "../../API/types/productsType";

type props = {
    product: productType
    goToProduct: (id: number) => void
}

export const ProductCardInfo: FC<props> = ({product, goToProduct}: props) => {
    return (
        <CardContent sx={{pb: 0}}>
            <Tooltip placement="top-start" arrow title={product.title}>
                <Typography onClick={() => goToProduct(product.id)}
                            sx={{overflow: 'hidden', height: 60, cursor: 'pointer'}}
                            gutterBottom variant="h5"
                            component="div">
                    {product.title}
                </Typography>
            </Tooltip>
            <Tooltip arrow title={`votes:${product.rating.count}`}>
                <Typography>
                    <Rating value={product.rating.rate} readOnly/>
                </Typography>
            </Tooltip>
            <Typography sx={{height: 80, overflow: 'hidden'}} variant="body2" color="text.secondary">
                {product.description}
            </Typography>
        </CardContent>
    );
};

