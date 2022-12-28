import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import {cartModal} from "../AdminCartsList";
import {useAppSelector} from "../../../redux/hooks";
import {cartSelectors} from "../../../redux/carts/cartsSelectors";
import {productsSelectors} from "../../../redux/products/productsSelectors";

type props = {
    modalData: cartModal | null
}

export const CartProductsList:React.FC<props> = ({modalData}:props) => {

    const [checked, setChecked] = React.useState([0]);
    const cartProducts = useAppSelector(cartSelectors.selectCartProducts)
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

    if(isProductLoading) return <div>loading</div>
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {cartProducts.map((product) => {
                const labelId = `checkbox-list-label-${product.id}`;

                return (
                    <ListItem
                        key={product.id}
                        secondaryAction={
                            <IconButton edge="end" aria-label="comments">
                                <CommentIcon />
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
                                    inputProps={{ 'aria-labelledby': labelId }}
                                />
                            </ListItemIcon>
                            <ListItemText id={labelId} primary={`Line item ${product.id + 1}`} />
                        </ListItemButton>
                    </ListItem>
                );
            })}
        </List>
    )
};

