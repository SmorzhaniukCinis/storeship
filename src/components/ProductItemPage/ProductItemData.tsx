import React from 'react';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import {DisabledRating} from "./DisabledRating";
import {productType} from "../../API/types/productsType";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartOutlinedIcon from '@mui/icons-material/RemoveShoppingCartOutlined';
import {persistSelectors} from "../../redux/persist/persistSelectors";
import {updateCart} from "../../redux/persist/persistSlise";

type props = {
    product: productType | null
}

export const ProductItemData: React.FC<props> = ({product}: props) => {

    const dispatch = useAppDispatch()
    const userCart = useAppSelector(persistSelectors.selectCart)

    const updateUserCart = () => {
        if (product) {
            dispatch(updateCart({productId: product.id, quantity: 1}))
        }
    }

    return (
        <div>
            <Typography fontSize={30}>{product?.title}</Typography>
            <div style={{display: 'flex', marginTop: 10}}>
                <Typography sx={{mr: 2}} fontSize={20} lineHeight={2}>Price:{product?.price}$</Typography>
                {userCart.find(productItem => productItem.productId === product?.id)
                    ? <Button color='warning' onClick={updateUserCart} variant='outlined'>
                        <RemoveShoppingCartOutlinedIcon sx={{mr: 1}}/>
                        cancel adding
                    </Button>
                    : <Button color='success' onClick={updateUserCart} variant='outlined'>
                        <AddShoppingCartIcon sx={{mr: 1}}/>
                        add to card
                    </Button>
                }
            </div>
            <div style={{maxWidth: 210, display: 'flex', justifyContent: 'space-between'}}>
                <Tooltip followCursor enterDelay={500} title={`Votes: ${product?.rating.count}`}>
                    <Typography sx={{width: 120, pt: '20px', pb: 1}}>
                        <DisabledRating rating={product?.rating.rate}/>
                    </Typography>
                </Tooltip>
            </div>
            <Typography>{product?.description}</Typography>
        </div>
    );
};

