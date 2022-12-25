import React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {DesktopDatePicker} from '@mui/x-date-pickers/DesktopDatePicker';
import {MobileDatePicker} from '@mui/x-date-pickers/MobileDatePicker';
import dayjs, {Dayjs} from "dayjs";
import Box from "@mui/material/Box";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {cartSagaActions} from "../../redux/carts/cartsSaga";
import {appSelectors} from "../../redux/app/appSelectors";
import {cartSelectors} from "../../redux/carts/cartsSelectors";
import {setDateFilter} from "../../redux/carts/cartSlise";

const dateFormat = 'YYYY-MM-DD'

export const DatePicker = () => {

    const dispatch = useAppDispatch()
    const {startDate, endDate} = useAppSelector(cartSelectors.selectDateRange)

    const changeStartDate = (newValue: Dayjs | null) => {
        dispatch(setDateFilter({startDate: newValue?.format(dateFormat)}))
    }
    const changeEndDate = (newValue: Dayjs | null) => {
        dispatch(setDateFilter({startDate: undefined, endDate: newValue?.format(dateFormat)}))
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box sx={{pb: 3}} display={{xs: 'none', md: 'flex'}} justifyContent='space-around'>
                <DesktopDatePicker
                    label="Start Date"
                    inputFormat="YYYY/MM/DD"
                    value={startDate}
                    onChange={changeStartDate}
                    renderInput={(params) => <TextField sx={{width: '40%'}} {...params} />}
                />
                <DesktopDatePicker
                    label="End Date"
                    inputFormat="YYYY/MM/DD"
                    value={endDate}
                    onChange={changeEndDate}
                    renderInput={(params) => <TextField sx={{width: '40%'}} {...params} />}
                />
            </Box>
            <Stack spacing={1} sx={{pb: 3}} display={{xs: 'flex', md: 'none'}}>
                <MobileDatePicker
                    label="Start Date"
                    inputFormat="YYYY/MM/DD"
                    value={startDate}
                    onChange={changeStartDate}
                    renderInput={(params) => <TextField {...params} />}
                />
                <MobileDatePicker
                    label="End Date"
                    inputFormat="YYYY/MM/DD"
                    value={endDate}
                    onChange={changeEndDate}
                    renderInput={(params) => <TextField {...params} />}
                />
            </Stack>
        </LocalizationProvider>
    );
};

