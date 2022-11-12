import React, {FC} from 'react';
import {CardMedia} from "@mui/material";

type props = {
    url: string
    id: number
    goToProduct: (id:number) => void
}

export const ProductCardImage:FC<props> = ({url, goToProduct, id}:props) => {
    return (
        <CardMedia sx={{height: 250, minWidth: 245,}} onClick={()=>goToProduct(id)}>
            <div style={{
                backgroundColor: 'white',
                display: 'flex',
                height: 250,
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
            }}>
                <img style={{maxWidth: 245, maxHeight: 250}} src={url} alt={url}/>
            </div>

        </CardMedia>
    );
};

