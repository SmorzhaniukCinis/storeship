import React from 'react';
import {Controller} from "react-hook-form";
import Dropzone from "react-dropzone";
import {List, ListItem, ListItemIcon, ListItemText, Paper, Typography} from "@mui/material";
import {CloudUpload, InsertDriveFile} from "@mui/icons-material";

type props = {
    control: any
    name: string
    defaultValue?: string | undefined
}

export const SelectProductImage: React.FC<props> = ({control, name, defaultValue}: props) => {
    return (
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
                <List>
                    {!value && defaultValue
                        ? <ListItem>
                            <ListItemIcon>
                                <InsertDriveFile/>
                            </ListItemIcon>
                            <ListItemText primary={defaultValue}/>
                        </ListItem>
                        : null}
                    {value?.map((f: any, index: number) => (
                        <ListItem key={index}>
                            <ListItemIcon>
                                <InsertDriveFile/>
                            </ListItemIcon>
                            <ListItemText primary={f.name} secondary={f.size}/>
                        </ListItem>
                    ))}
                </List>
            </>
            }
        />
    );
}