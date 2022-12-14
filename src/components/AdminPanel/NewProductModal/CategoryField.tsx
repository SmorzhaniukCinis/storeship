import React from 'react';
import Typography from "@mui/material/Typography";
import {FormControl, InputLabel, Select, SelectChangeEvent} from "@mui/material";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";

type props = {
    errors: any
    register: any
}

const categories = ["electronics", "jewelery", "men's clothing", "women's clothing"]

export const CategoryField:React.FC<props> = ({errors, register}:props) => {

    const [category, setCategory] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setCategory(event.target.value as string);
    };

    return (
        <Box sx={{display: 'flex', flexDirection: 'column'}}>
            <Typography fontSize={14} sx={{pb: 1}} color='error'>{errors.category?.message}</Typography>
            <FormControl fullWidth sx={{height: 70}}>
                <InputLabel id="category">category</InputLabel>
                <Select
                    color={errors.description && 'error'}
                    {...register("category", {required: "Category is required field"})}
                    labelId="category"
                    value={category}
                    label="category"
                    onChange={handleChange}
                >
                    {categories.map(category =>
                        <MenuItem key={category} value={category}>
                            {category}
                        </MenuItem>)}
                </Select>
            </FormControl>
        </Box>
    );
};
