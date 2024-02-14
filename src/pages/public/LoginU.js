
import { useForm } from 'react-hook-form';
import { getSignupData } from '../../api/http';
import FormUser from '../../components/public/FormUser';
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from 'react';
import { setCookies } from '../../components/state/store';
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
const validateSchema = yup.object({
    email: yup.string().required('Email can not be empty').email('please enter correct email'),
    password: yup.string().required("Password can not be empty")
});


export default function LoginU() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [errorsValidation, setErrorsValidation] = useState(undefined);
    const [errorAuth, setErrorAuth] = useState(undefined);
    const { handleSubmit, register, formState: { errors } } = useForm({
        resolver: yupResolver(validateSchema)
    });


    useEffect(() => {
        if (errors.emails || errors.password) {
            setErrorsValidation(errors)
        }
    }, [errors]);


    function onSubmit(data) {
        getSignupData('login', data).then(e => {
            if (e.isSucceed === true) {
                dispatch(setCookies(e.idToken));
                console.log('NAVIGATTTTTTTTTTE')
                navigate('/home')
            }
            if (e.isSucceed === false) {
                setErrorAuth(e.message);
            }
        })
    }
    return (
        <>
            <FormUser errorAuth={errorAuth} path='/' linkPhares="create an account ? " errors={errorsValidation} onSubmit={onSubmit} register={register} handleSubmit={handleSubmit} method='post' header='Login' />
        </>
    )
}
