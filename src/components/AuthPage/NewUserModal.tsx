import React from 'react';
import Box from "@mui/material/Box";
import {TextField, Typography} from "@mui/material";
import Modal from "@mui/material/Modal";
import {FormData} from "./AuthPage";
import {useForm} from "react-hook-form";
import Button from "@mui/material/Button";
import {usersSagaActions} from "../../redux/users/usersSaga";
import {useAppDispatch} from "../../redux/hooks";
import {NewUserField} from "./NewUserField";
import CloseIcon from '@mui/icons-material/Close';

type props = {
    closeModal: () => void
    isModalOpen: boolean
    newUserData: FormData | null

}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: {md: '40%', xs: '90%'},
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: '15px',
    pt: 0,
    pb: {md: 6, xs: 2},
    pl: {md: 6, xs: 2},
    pr: {md: 6, xs: 2},
    display: 'flex',
    flexDirection: 'column'
};

type newUserForm = {
    email: string
    firstname: string
    lastname: string
    phone: string
    city: string
    street: string
    number: string
}


export const NewUserModal: React.FC<props> = ({closeModal, isModalOpen, newUserData}: props) => {

    const dispatch = useAppDispatch()
    const {register, handleSubmit, formState: {errors}} = useForm<newUserForm>({
        defaultValues: {
            email: 'fdjalfkdsaf@gmail.com',
            firstname: 'John',
            lastname: 'Doe',
            phone: '15702367033',
            city: 'kilcoole',
            street: '7835 new road',
            number: '3'
        }
    });
    const onSubmit = handleSubmit((data) => {
        dispatch(usersSagaActions.postNewUser({
            username: newUserData?.username || 'some',
            password: newUserData?.password || 'error',
            email: data.email,
            phone: data.phone,
            name: {
                firstname: data.firstname,
                lastname: data.lastname
            },
            address: {
                city: data.city,
                number: Number(data.number),
                street: data.street,
                geolocation: {
                    lat: '0',
                    long: '0'
                },
                zipcode: '0'
            }
        }))
    })


    return (
        <Modal open={isModalOpen} onClose={closeModal}>
            <form onSubmit={onSubmit}>
                <Box sx={style}>
                    <CloseIcon sx={{position: 'inherit', right: 15, top: 10, cursor: 'pointer', fontSize: 30}}/>
                    <Typography textAlign='center' sx={{pb: 2, pt: 4}} variant='h5'>Enter your data</Typography>

                    <NewUserField error={errors.email} label='*Email' name='email' register={register} isRequired={true}
                                  type='email'/>
                    <NewUserField error={errors.firstname} label='*Firstname' name='firstname' register={register}
                                  isRequired={true}/>
                    <NewUserField error={errors.lastname} label='*Lastname' name='lastname' register={register}
                                  isRequired={true}/>
                    <NewUserField error={errors.phone} label='*Phone' name='phone' register={register} isRequired={true}
                                  type='number'/>
                    <NewUserField error={errors.city} label='City' name='city' register={register} isRequired={false}/>
                    <NewUserField error={errors.street} label='Street' name='street' register={register}
                                  isRequired={false}/>
                    <NewUserField error={errors.number} label='Number' name='number' register={register}
                                  isRequired={false}/>
                    <Button variant='outlined' color='success' type='submit'>Submit</Button>
                </Box>
            </form>
        </Modal>
    );
};

