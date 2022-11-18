import React from 'react';
import Box from "@mui/material/Box";
import {Autocomplete, TextField} from "@mui/material";
import {useAppSelector} from "../../redux/hooks";
import {novaPoshtaSelectors} from "../../redux/novaPoshta/novaPoshtaSelectors";

type props = {
    register: any
}

export const FindPostDepartmentField:React.FC<props> = ({register}:props) => {
    const postDepartment = useAppSelector(novaPoshtaSelectors.selectPostDepartments)

    return (
        <Autocomplete
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
                           label="POST DEPARTMENT"
                           {...register("postDepartment", {required: true})}
                           variant="outlined"/>}
        />
    );
};

