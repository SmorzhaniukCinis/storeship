import React from 'react';
import {Paper, Tab, Tabs} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {AdminProductsList} from "./AdminProductsList";
import {AdminCartsList} from "./AdminCartsList";
import {AdminUserList} from "./AdminUserList";
import {useAppSelector} from "../../redux/hooks";
import {appSelectors} from "../../redux/app/appSelectors";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{p: 3, width: '100%'}}>
                    {children}
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


export const AdminPanel = () => {
    const [value, setValue] = React.useState(0);
    const searchStr = useAppSelector(appSelectors.selectAdminSearch)

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{width: '100%'}}>
            <Tabs
                centered
                value={value}
                onChange={handleChange}
                textColor="inherit"
                indicatorColor="primary"
                aria-label="secondary tabs example"
                sx={{width: '100%', display: 'flex', justifyContent: 'space-around', p:0}}
            >
                <Tab label="Product Actions" {...a11yProps(0)} />
                <Tab label="Carts" {...a11yProps(1)} />
                <Tab label="Users" {...a11yProps(2)} />
            </Tabs>
            <TabPanel value={value} index={0} >
                <AdminProductsList searchStr={searchStr}/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <AdminCartsList searchStr={searchStr}/>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <AdminUserList searchStr={searchStr}/>
            </TabPanel>
        </Box>
    );
};

