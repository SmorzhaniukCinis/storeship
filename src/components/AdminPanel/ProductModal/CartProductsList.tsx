import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
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
import {Typography} from "@mui/material";
import {productType} from "../../../API/types/productsType";
import {cartProduct, cartType} from "../../../API/types/cartsTypes";

type props = {
    modalData: cartModal | null
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

    const findQuantity = (cart: cartProduct[] | undefined, productId: number) => {
        return cart?.find(item => item.productId === productId)?.quantity || 'error'
    }


    if (isProductLoading) return <Box textAlign='center'><AdminPanelLoader/></Box>
    return (
        <List sx={{width: '100%', bgcolor: 'background.paper'}}>
            {cartProducts.map((product) => {
                const labelId = `checkbox-list-label-${product.id}`;

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
                        <ListItemButton role={undefined} onClick={handleToggle(product.id)} dense>
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    checked={checked.indexOf(product.id) !== -1}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{'aria-labelledby': labelId}}
                                />
                            </ListItemIcon>
                            <ListItemText id={labelId}>
                                <Box display='flex' justifyContent='space-between'
                                     flexDirection={{md: 'row', xs: 'column'}} alignItems='center'>
                                    <Typography width={{md: '70%', xs: '100%'}}>{product.title}</Typography>
                                    <Box width={{md: '30%', xs: '100%'}} textAlign='center'>
                                        <Typography component='span' fontWeight='bold'>
                                            Quantity: {findQuantity(modalData?.cart.products, product.id)}
                                        </Typography>
                                        <Typography fontWeight='bold'>
                                            Total: {product.price*Number(findQuantity(modalData?.cart.products, product.id))} $
                                        </Typography>
                                    </Box>

                                </Box>
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                );
            })}
        </List>
    )
};

