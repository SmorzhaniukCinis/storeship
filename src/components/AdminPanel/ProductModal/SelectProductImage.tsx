import React from 'react';
import {Controller} from "react-hook-form";
import Dropzone from "react-dropzone";
import {Paper, Typography} from "@mui/material";
import {CloudUpload} from "@mui/icons-material";
import Box from "@mui/material/Box";
import {ImageDisplay} from "./ImageDisplay";

type props = {
    control: any
    name: string
    defaultValue?: string | undefined
    errors: any
}

export const SelectProductImage: React.FC<props> = ({control, name, defaultValue, errors}: props) => {
    return (
        <Box sx={{display: 'flex', flexDirection: 'column'}}>
            <Typography fontSize={14} sx={{pb: 1}} color='error'>{errors.image?.message}</Typography>
            <Controller
                rules={{required: defaultValue ? false : "image is required"}}
                control={control}
                name={name}
                render={({field: {onChange, onBlur, value, name, ref}}) => <>
                    {/*@ts-ignore*/}
                    <Dropzone inputRef={ref} onDrop={onChange}>
                        {
                            ({getRootProps, getInputProps}) => (
                                <>
                                    <Paper sx={{p: 1.3, display: 'flex', alignItems: 'center', cursor: 'pointer'}}
                                           variant={"outlined"} {...getRootProps()}>
                                        <CloudUpload sx={{m: 1}}/>
                                        <input {...getInputProps()} name={name} onBlur={onBlur}/>
                                        <Typography>Click for choose or drop image</Typography>
                                    </Paper>
                                </>
                            )
                        }
                    </Dropzone>
                    <ImageDisplay value={value} defaultValue={defaultValue}/>
                </>
                }
            />
        </Box>


    );
}