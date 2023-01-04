import React from 'react';
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {useNavigate} from "react-router-dom";
import {ThemeSwitch} from "./ThemeSwitch";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {appSelectors} from "../../redux/app/appSelectors";
import {setTheme} from "../../redux/app/appSlise";
import {LogoutModal} from "./LogoutModal";
import SettingsIcon from '@mui/icons-material/Settings';
import {persistSelectors} from "../../redux/persist/persistSelectors";

export const SettingMenu = () => {

    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const navigate = useNavigate()
    const isLightTheme = useAppSelector(appSelectors.selectIsLightTheme)
    const currentUser = useAppSelector(persistSelectors.selectCurrentUser)
    const dispatch = useAppDispatch()
    const [isOpen, setIsOpen] = React.useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    const handleCloseUserMenu = () => {setAnchorElUser(null);}
    const changeTheme = () => {dispatch(setTheme(!isLightTheme))}
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    }
    const goToPage = (href: string) => {
        navigate(href)
        setAnchorElUser(null)
    }

    return (
        <Box sx={{flexGrow: 0}}>
            <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                    <SettingsIcon fontSize='large' sx={{color: '#fff'}}/>
                </IconButton>
            </Tooltip>
            {currentUser
                ? <Menu sx={{mt: '45px'}} anchorEl={anchorElUser} keepMounted open={Boolean(anchorElUser)}
                        anchorOrigin={{vertical: 'top', horizontal: 'right',}} onClose={handleCloseUserMenu}
                        transformOrigin={{vertical: 'top', horizontal: 'right',}}
                >
                    <MenuItem onClick={() => goToPage('/profile/1')}>
                        <Typography textAlign="center">Profile</Typography>
                    </MenuItem>
                    <MenuItem onClick={() => goToPage('/admin/products')}>
                        <Typography textAlign="center">Admin Panel</Typography>
                    </MenuItem>
                    <MenuItem onClick={openModal}>
                        <Typography textAlign="center">Logout</Typography>
                    </MenuItem>
                    <ThemeSwitch sx={{m: 1}} onChange={changeTheme} value={isLightTheme}/>
                    <LogoutModal closeModal={closeModal} isOpen={isOpen}/>
                </Menu>
                : <Menu sx={{mt: '45px'}} anchorEl={anchorElUser} anchorOrigin={{vertical: 'top', horizontal: 'right',}}
                        keepMounted transformOrigin={{vertical: 'top', horizontal: 'right',}}
                        open={Boolean(anchorElUser)} onClose={handleCloseUserMenu}
                >
                    <MenuItem onClick={() => goToPage('/auth')}>
                        <Typography textAlign="center">Sing in</Typography>
                    </MenuItem>
                    <ThemeSwitch sx={{m: 1}} onChange={changeTheme} value={isLightTheme}/>
                </Menu>
            }
        </Box>
    );
};


