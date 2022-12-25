import React, {useEffect} from 'react';
import {Tab, Tabs} from "@mui/material";
import Box from "@mui/material/Box";
import {AdminProductsList} from "./AdminProductsList";
import {AdminCartsList} from "./AdminCartsList";
import {AdminUserList} from "./AdminUserList";
import {useAppSelector} from "../../redux/hooks";
import {appSelectors} from "../../redux/app/appSelectors";
import TabPanel from "./ProductModal/TabPanelWrapper";
import {useNavigate, useParams} from "react-router-dom";
import {AdminPanelLoader} from "./AdminPanelLoader";

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export const AdminPanel = () => {

    const {tab} = useParams()
    const [value, setValue] = React.useState(0);
    const searchStr = useAppSelector(appSelectors.selectAdminSearch)
    const navigate = useNavigate()

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    useEffect(() => {
        switch (tab) {
            case 'products': if (value !== 0) setValue(0)
                break
            case 'carts': if (value !== 1) setValue(1)
                break
            case 'users': if (value !== 2) setValue(2)
                break
            default: navigate('/404')
        }
    }, [tab, navigate])

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
                <Tab onClick={() => navigate('/admin/products')} label="Product Actions" {...a11yProps(0)} />
                <Tab onClick={() => navigate('/admin/carts')} label="Carts" {...a11yProps(1)} />
                <Tab onClick={() => navigate('/admin/users')} label="Users" {...a11yProps(2)} />
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

