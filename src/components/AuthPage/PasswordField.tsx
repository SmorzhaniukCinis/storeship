import React from 'react';
import {FormControl, InputAdornment, InputLabel, OutlinedInput, Typography} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import {Visibility, VisibilityOff} from "@mui/icons-material";

type props = {
    register: any
    label: string
    fieldName: string
    error: string | undefined
}

export const PasswordField: React.FC<props> = ({register, label, fieldName, error}: props) => {

    const [isPasswordVisible, setIsPasswordVisible] = React.useState<boolean>(false);

    const handleClickShowPassword = () => {
        setIsPasswordVisible((prevState) => !prevState)
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <>
            {<Typography sx={{color: '#e84141'}}>{error}</Typography>}
            <FormControl fullWidth variant="outlined" sx={{mt: '10px'}}>
                <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
                <OutlinedInput
                    color={error ? "error" : null}
                    {...register(fieldName, {
                        required: 'field is required',
                        minLength: {value: 5, message: 'minimum 5 chars'}
                    })}
                    label={label}
                    id={label}
                    type={isPasswordVisible ? 'text' : 'password'}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {isPasswordVisible ? <VisibilityOff/> : <Visibility/>}
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>
        </>

    );
};

