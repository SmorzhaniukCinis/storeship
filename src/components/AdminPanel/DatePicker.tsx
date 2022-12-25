import React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {DesktopDatePicker} from '@mui/x-date-pickers/DesktopDatePicker';
import {MobileDatePicker} from '@mui/x-date-pickers/MobileDatePicker';
import dayjs, {Dayjs} from "dayjs";
import Box from "@mui/material/Box";
import {useAppDispatch} from "../../redux/hooks";
import {cartSagaActions} from "../../redux/carts/cartsSaga";

export const DatePicker = () => {

    const [startDate, setStartDate] = React.useState<Dayjs | null>(dayjs(new Date('12-12-2000')))
    const [endDate, setEndDate] = React.useState<Dayjs | null>(dayjs(new Date()))
    const dispatch = useAppDispatch()

    const changeStartDate = (newValue: Dayjs | null) => {
        setStartDate(newValue)
        dispatch(cartSagaActions.fetchCarts(
            undefined,
            undefined,
            newValue?.format('YYYY-MM-DD'),
            endDate?.format('YYYY-MM-DD')
        ))
    }
    const changeEndDate = (newValue: Dayjs | null) => {
        setEndDate(newValue)
        dispatch(cartSagaActions.fetchCarts(
            undefined,
            undefined,
            startDate?.format('YYYY-MM-DD'),
            newValue?.format('YYYY-MM-DD')
        ))    }
    dispatch(cartSagaActions.fetchCarts(undefined, undefined, startDate?.format('YYYY-MM-DD')))

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

