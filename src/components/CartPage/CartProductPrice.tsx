import React, {useState} from 'react';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import {TextField} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import Grid from "@mui/material/Unstable_Grid2";
import {useAppDispatch} from "../../redux/hooks";
import {setProductQuantity} from "../../redux/persist/persistSlise";

type props = {
    prise: number
    quantity: number
    productId: number
}

export const CartProductPrice: React.FC<props> = ({prise, quantity, productId}: props) => {

        const dispatch = useAppDispatch()
        const [productQuantity, setProductQuantity] = useState(quantity)

        const changeQuantity = (quantity: number) => {
            setProductQuantity(quantity)
        }
        const incrementQuantity = () => {
            setProductQuantity((prevState) => ++prevState)
        }
        const decrementQuantity = () => {

            setProductQuantity((prevState) => {
                    if (prevState === 1) {
                        return prevState
                    } else {
                        return --prevState
                    }
                }
            )
        }

        return (
            <Grid xs={12} md={3} textAlign='center'>
                <Typography fontSize={20}>
                    Prise: {prise * productQuantity}$
                </Typography>
                <Box>
                    <Button sx={{p: 1.1, borderRadius: 1}}>
                        <AddIcon onClick={incrementQuantity} sx={{color: 'secondary.dark'}}/>
                    </Button>
                    <TextField value={productQuantity} onChange={(e) => changeQuantity(Number(e.target.value))}
                               type={'number'}
                               size='small'
                               sx={{width: 60, m: '0 5px'}}
                               variant="outlined"/>
                    <Button sx={{p: 1.1, borderRadius: 1}}>
                        <RemoveIcon onClick={decrementQuantity} sx={{color: 'secondary.dark'}}/>
                    </Button>
                </Box>
            </Grid>
        );
    }
;

