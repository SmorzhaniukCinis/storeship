import React, {useState} from 'react';
import Box from "@mui/material/Box";
import {Autocomplete, TextField} from "@mui/material";
import {useAppSelector} from "../../redux/hooks";
import {novaPoshtaSelectors} from "../../redux/novaPoshta/novaPoshtaSelectors";
import novaPoshta from "../../assets/novaPoshtaIcon.png";
import Typography from "@mui/material/Typography";

type props = {
    register: any
    watch: (field: string) => string
}

export const FindPostDepartmentField:React.FC<props> = ({register, watch}:props) => {
    const postDepartment = useAppSelector(novaPoshtaSelectors.selectPostDepartments)


    console.log(watch('location'))
    return (
        <Box>
            <Typography sx={{pb: 1}}>
                Choose department of <img style={{marginLeft:5}} width={15} src={novaPoshta} alt='novaPoshtaIcon'/> NovaPoshta
            </Typography>
            <Autocomplete
                disabled={!watch('location')}
                id="combo-box-demo"
                options={postDepartment}
                getOptionLabel={option => option.Description}
                renderOption={(props, option) => (
                    <Box component="li" {...props}>
                        {option.Description}
                    </Box>

                )}
                renderInput={(params) =>
                    <TextField {...params}
                               fullWidth={true}
                               label="POST DEPARTMENT*"
                               {...register("postDepartment", {required: true})}
                               variant="outlined"/>}
            />
        </Box>

    );
};

