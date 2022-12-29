import React, {useEffect} from 'react';
import {FormControl, InputLabel, OutlinedInput} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {setAdminSearch} from "../../redux/app/appSlise";
import {appSelectors} from "../../redux/app/appSelectors";

type props = {
    label?: string
}

export const AdminSearchField:React.FC<props> = ({label}: props) => {

    const dispatch = useAppDispatch()
    const searchStr = useAppSelector(appSelectors.selectAdminSearch)

    useEffect(() => {
        return () => {
            dispatch(setAdminSearch(''))
        }
    }, [dispatch])

    const search = (event:any) => {
        dispatch(setAdminSearch(event.target.value))
    }

    return (
        <FormControl sx={{m: {md: '0 10px 15px 10px', xs: '0 0 10px 0'}, width: {xs: '100%', md: 400}}}>
            <InputLabel htmlFor="outlined-adornment-amount">
                <SearchIcon sx={{mr: 1}}/>
                <span style={{position: 'relative', bottom: 8}}>search {label}</span>
            </InputLabel>
            <OutlinedInput
                onChange={(event) => search(event)}
                value={searchStr}
                size='small'
                sx={{height: 50}}
                id="outlined-adornment-amount"
                label='________________'
            />
        </FormControl>
    );
};

