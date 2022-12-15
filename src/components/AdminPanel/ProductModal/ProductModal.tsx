import React from 'react';
import {Paper} from "@mui/material";
import Typography from "@mui/material/Typography";
import {useForm} from "react-hook-form";
import {newProduct, productType} from "../../../API/types/productsType";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {TitleField} from "./TitleField";
import {PriseField} from "./PriceField";
import {DescriptionField} from "./DescriptionField";
import {CategoryField} from "./CategoryField";
import {SelectProductImage} from "./SelectProductImage";
import {ProductStatusModal} from "./ProductStatusModal";
import {productsSagaActions} from "../../../redux/products/productSaga";
import {useAppDispatch} from "../../../redux/hooks";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: {md: '70%', xs: '90%'},
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 4,
};

type props = {
    closeProductModal: () => void
    productForUpdate?: productType
}

type formData = {
    category: string
    description: string
    image: any[]
    price: string
    title: string
}

export const ProductModal: React.FC<props> = ({closeProductModal, productForUpdate}: props) => {

    const dispatch = useAppDispatch()

    const {control, register, handleSubmit, formState: {errors}} = useForm<formData>();
    const onSubmit = handleSubmit(data => {
        console.log(data.image[0].path)
        dispatch(productsSagaActions.postNewProduct({
            image: URL.createObjectURL(data.image[0]),
            description: data.description,
            price: Number(data.price),
            title: data.title,
            category: data.category
        }))
        statusModalOpen(true)
    });

    const [open, setOpen] = React.useState(false);
    const [isSuccess, setIsSuccess] = React.useState(false);
    const statusModalOpen = (status: boolean) => {
        setIsSuccess(status)
        setOpen(true)
        setTimeout(() => {
            setOpen(false)
            closeProductModal()
        }, 2000)

    }
    const handleClose = () => setOpen(false);

    return (
        <Paper sx={style}>
            <Typography variant='h4' textAlign='center' sx={{mb: 2}}>
                {productForUpdate ? 'Update Product' : 'Add new product'}
            </Typography>

            <form onSubmit={onSubmit}>
                <Box sx={{display: 'flex', flexDirection: 'column', padding: {md: '10px 150px', xs: 0}}}>
                    <TitleField defaultValue={productForUpdate?.title} register={register} errors={errors}/>
                    <PriseField defaultValue={String(productForUpdate?.price)} register={register} errors={errors}/>
                    <DescriptionField defaultValue={productForUpdate?.description} register={register} errors={errors}/>
                    <CategoryField defaultValue={productForUpdate?.category} register={register} errors={errors}/>
                    <Box sx={{display: 'flex', flexDirection: 'column'}}>
                        <Typography fontSize={14} sx={{pb: 1}} color='error'>{errors.image?.message}</Typography>
                        <SelectProductImage defaultValue={productForUpdate?.image} control={control} name='image'/>
                    </Box>
                    <Box display='flex' justifyContent='space-between'>
                        <Button sx={{height: 50}} type="submit" variant='contained' color='success'>
                            {productForUpdate ? 'update product' : 'add product'}
                        </Button>
                        <Button sx={{height: 50}} onClick={closeProductModal} variant='contained'
                                color='warning'>cancel</Button>
                    </Box>

                    <ProductStatusModal handleClose={handleClose} open={open} isSuccess={isSuccess}/>
                </Box>
            </form>
        </Paper>
    );
};

