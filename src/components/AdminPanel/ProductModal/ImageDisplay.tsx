import React from 'react';
import {List, ListItem, ListItemIcon, ListItemText} from "@mui/material";
import {InsertDriveFile} from "@mui/icons-material";

type props = {
    value: any
    defaultValue: string | undefined
}

export const ImageDisplay:React.FC<props> = ({value, defaultValue}: props) => {
    return (
        <List sx={{maxWidth: {xs: '300px', md: '100%'}}}>
            {!value && defaultValue
                ? <ListItem>
                    <ListItemIcon>
                        <InsertDriveFile/>
                    </ListItemIcon>
                    <ListItemText sx={{ overflow: 'hidden'}} primary={defaultValue}/>
                </ListItem>
                : null}
            {value?.map((f: any, index: number) => (
                <ListItem  key={index}>
                    <ListItemIcon>
                        <InsertDriveFile/>
                    </ListItemIcon>
                    <ListItemText sx={{ overflow: 'hidden'}}  primary={f.name} secondary={f.size}/>
                </ListItem>
            ))}
        </List>
    );
};

