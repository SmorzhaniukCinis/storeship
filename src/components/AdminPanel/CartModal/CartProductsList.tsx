import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import {cartModal} from "../AdminCartsList";
import {useAppSelector} from "../../../redux/hooks";
import {cartSelectors} from "../../../redux/carts/cartsSelectors";
import {productsSelectors} from "../../../redux/products/productsSelectors";
import {AdminPanelLoader} from "../AdminPanelLoader";
import Box from "@mui/material/Box"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Tooltip from "@mui/material/Tooltip";
import {useNavigate} from "react-router-dom";
import {cartProduct} from "../../../API/types/cartsTypes";
import {CartLIstItem} from "./CartLIstItem";

type props = {
    modalData: cartModal | null
}
const findQuantity = (cart: cartProduct[] | undefined, productId: number) => {
    return cart?.find(item => item.productId === productId)?.quantity || 'error'
}

export const CartProductsList: React.FC<props> = ({modalData}: props) => {

    const [checked, setChecked] = React.useState([0]);
    const cartProducts = useAppSelector(cartSelectors.selectCartProducts)
    const navigate = useNavigate()
    const isProductLoading = useAppSelector(productsSelectors.selectIsProductsLoading)

    const handleToggle = (value: number) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };



    if (isProductLoading) return <Box textAlign='center'><AdminPanelLoader/></Box>
    return (
        <List sx={{width: '100%', bgcolor: 'background.paper'}}>
            {cartProducts.map((product) => {
                const labelId = `checkbox-list-label-${product.id}`;
                const quantity = findQuantity(modalData?.cart.products, product.id)

                return (
                    <ListItem
                        sx={{borderBottom: '1px solid '}}
                        key={product.id}
                        secondaryAction={
                            <IconButton edge="end" onClick={() => navigate(`/product/${product.id}`)}>
                                <Tooltip title='Go to product page'>
                                    <ArrowForwardIcon/>
                                </Tooltip>
                            </IconButton>
                        }
                        disablePadding
                    >
                        <CartLIstItem checked={checked} handleToggle={handleToggle} labelId={labelId} quantity={quantity} product={product}/>
                    </ListItem>
                );
            })}
        </List>
    )
};

