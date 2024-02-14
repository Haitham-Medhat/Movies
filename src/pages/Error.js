import React from 'react'
import ErrorContent from '../components/Error/ErrorContent'
import { useRouteError } from 'react-router-dom'

export default function Error({ messages }) {
    const error = useRouteError();
    let message = messages ? messages : 'An unexpected error has been Occured';
    let title = 'An unexpected error has been Occured';

    if (error) { 
        if (error.status === 404) {
            message = 'Erorr 404 Page Not Found';
            title = 'Erorr 404 Page Not Found';
        }
    }


    return (
        <ErrorContent title={title}>
            {message}
        </ErrorContent>
    )
}
