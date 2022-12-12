import React from 'react';
import {ButtonGroup, FormControl, InputLabel, Select, SelectChangeEvent} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import SouthIcon from "@mui/icons-material/South";
import NorthIcon from "@mui/icons-material/North";
import Box from "@mui/material/Box";

export const SortBar = () => {

    const [filter, setFilter] = React.useState('');
    const [sortBy, setSortBy] = React.useState(0);

    const handleChange = (event: SelectChangeEvent) => {
        setFilter(event.target.value as string);
    };

    return (
        <Box mb={2} display='flex'>
            <FormControl sx={{width: 170, mr: 1}}>
                <InputLabel id="demo-simple-select-label">filter</InputLabel>
                <Select
                    id="demo-simple-select"
                    value={filter}
                    label="Age"
                    onChange={handleChange}
                    sx={{height: 50}}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>

            <ButtonGroup variant="contained" >
                <Button sx={{height: 50}} disabled={sortBy === 0} onClick={()=>setSortBy(0)}><SouthIcon/></Button>
                <Button sx={{height: 50}} disabled={sortBy === 1}  onClick={()=>setSortBy(1)}><NorthIcon/></Button>
            </ButtonGroup>
            <Button color='success' variant='contained' sx={{height: 50, ml: 1}}>sort</Button>
        </Box>
    );
};

