import React from 'react';
import {FormControl, InputAdornment, InputLabel, OutlinedInput} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import {Visibility, VisibilityOff} from "@mui/icons-material";

type props = {
    register: any
    label: string
}

export const PasswordField:React.FC<props> = ({register, label}:props) => {

    const [isPasswordVisible, setIsPasswordVisible] = React.useState<boolean>(false);

    const handleClickShowPassword = () => {
        setIsPasswordVisible((prevState) => !prevState)
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <FormControl fullWidth variant="outlined" sx={{mt: '10px'}}>
            <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
            <OutlinedInput
                {...register("password")}
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
    );
};

