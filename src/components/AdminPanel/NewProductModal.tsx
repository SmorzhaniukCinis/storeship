import React from 'react';
import {FormControl, InputLabel, Paper, Select, SelectChangeEvent, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import Fade from "@mui/material/Fade";
import {useForm} from "react-hook-form";
import {newProduct} from "../../API/types/productsType";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Dropzone from "react-dropzone";
import {SelectProductImage} from "./SelectProductImage";


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


const categories = [ "electronics", "jewelery", "men's clothing", "women's clothing"]

export const NewProductModal = () => {

    const {control, register, handleSubmit, formState: {errors}} = useForm<newProduct>();
    const onSubmit = handleSubmit(data => console.log(data));

    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };


    return (

        <Paper sx={style}>
            <Typography variant='h4' textAlign='center' sx={{mb: 2}}>
                Add new product
            </Typography>
            <form onSubmit={onSubmit}>
                <Box sx={{display: 'flex', flexDirection: 'column', padding: {md: '10px 150px', xs: 0}}}>
                    <TextField label='product title' sx={{height: 70}}  {...register("title", {required: true})} />
                    <TextField label='product price' sx={{height: 70}} type='number'  {...register("price", {required: true})} />
                    <TextField label='product description' sx={{height: 70}}  {...register("description", {required: true})} />

                    <SelectProductImage control={control} name='files'/>

                    <FormControl fullWidth sx={{height: 70}} >
                        <InputLabel id="demo-simple-select-label">category</InputLabel>
                        <Select
                            {...register("category", {required: true})}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="category"
                            onChange={handleChange}
                        >
                            {categories.map(category => <MenuItem key={category} value={category}>{category}</MenuItem>)}
                        </Select>
                    </FormControl>
                    <Button sx={{height: 50}} type="submit" variant='contained' color='success'>add product</Button>
                </Box>
            </form>
        </Paper>
    );
};

