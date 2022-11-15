import React from 'react';
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {useNavigate} from "react-router-dom";
import {ThemeSwitch} from "./ThemeSwitch";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {appSelectors} from "../../redux/app/appSelectors";
import {setTheme} from "../../redux/app/appSlise";


export const SettingMenu = () => {

    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const navigate = useNavigate()

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const goToPage = (href: string) => {
        navigate(href)
        setAnchorElUser(null);
    }
    const isLightTheme = useAppSelector(appSelectors.selectIsLigthTheme)
    const dispatch = useAppDispatch()

    const changeTheme = () => {
        dispatch(setTheme(!isLightTheme))
    }

    return (
        <Box sx={{flexGrow: 0}}>
            <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg"/>
                </IconButton>
            </Tooltip>
            <Menu
                sx={{mt: '45px'}}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                <MenuItem onClick={() => goToPage('/profile/1')}>
                    <Typography textAlign="center">Profile</Typography>
                </MenuItem>
                <MenuItem onClick={() => goToPage('/admin')}>
                    <Typography textAlign="center">Admin Panel</Typography>
                </MenuItem>
                <MenuItem onClick={() => goToPage('/auth')}>
                    <Typography textAlign="center">Logout</Typography>
                </MenuItem>
                <ThemeSwitch sx={{ m: 1 }} onChange={changeTheme} value={isLightTheme}  />
            </Menu>
        </Box>
    );
};
