import React from 'react';
import {Link} from "react-router-dom";
import Typography from "@mui/material/Typography";

type props = {
    isAuthPath: boolean
}

export const AuthRouterLink = ({isAuthPath}: props) => {



    return (
        <Typography textAlign='center' sx={{mt: 3}}>
            <span style={{paddingRight: 5}}>
                {isAuthPath ? 'Not have account?' : 'Have account?'}
            </span>
            <Link style={{color: 'inherit'}} to={isAuthPath ? '/registration' : '/auth'}>
                {isAuthPath ? 'Registration' : 'Authorization' }
            </Link>
        </Typography>
    );
};

