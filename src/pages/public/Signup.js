
import { useForm } from 'react-hook-form';
import { getSignupData } from '../../api/http';
import FormUser from '../../components/public/FormUser';
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from 'react';
import ErrorMessage from '../../components/UI/ErrorMessage';
import { useNavigate } from 'react-router-dom';
const regexPassword =
    /^(?=.{10,}$)(?=(?:.*?[A-Z]){2,})(?=.*?[a-z])(?=(?:.*?[0-9]){2}(?!.*-)(?!.*%)).*$/;
const validateSchema = yup.object({
    email: yup.string().required('Email can not be empty').email('please enter correct email '),
    password: yup.string().required("Password can not be empty").matches(
        regexPassword,
        "Please use at least two upper case and do not include neither % or - special charachter"
    ),
});


export default function Signup() {
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
        getSignupData('signup', data).then(e => {
            if (e.isSucceed === true) {
                navigate('/login');
            }
            if (e.isSucceed === false) {
                console.log(e.message)
                console.log(errorAuth)
                setErrorAuth(e.message);
            }
        })
    }

    return (
        <>
            <FormUser errorAuth={errorAuth} path='login' linkPhares="you already have an account, login?" errors={errorsValidation} onSubmit={onSubmit} register={register} handleSubmit={handleSubmit} method='post' header='Sign up' />
        </>
    )
}
