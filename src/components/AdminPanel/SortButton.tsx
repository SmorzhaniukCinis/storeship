import React from 'react';
import Button from "@mui/material/Button";
import SouthIcon from "@mui/icons-material/South";
import NorthIcon from "@mui/icons-material/North";
import {ButtonGroup} from "@mui/material";
import {sortByTypes} from "../../redux/products/types";
import {useAppDispatch} from "../../redux/hooks";
import {AnyAction} from "@reduxjs/toolkit";

type props = {
    setSortBy: (sortBy: sortByTypes) => AnyAction
    sortBy: sortByTypes
}

export const SortButton:React.FC<props> = ({setSortBy, sortBy}:props) => {


    const dispatch = useAppDispatch()

    const sortItems = (sortBy: sortByTypes) => {
        dispatch(setSortBy(sortBy))
    }

    return (
        <ButtonGroup variant="contained" >
            <Button sx={{height: 50}} disabled={sortBy === 'initial'} onClick={()=>sortItems('initial')}>
                <SouthIcon/>
            </Button>
            <Button sx={{height: 50}} disabled={sortBy === 'reverse'}  onClick={()=>sortItems('reverse')}>
                <NorthIcon/>
            </Button>
        </ButtonGroup>
    );
};

