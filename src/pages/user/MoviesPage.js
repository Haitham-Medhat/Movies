import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react'
import LoadingSpinner from '../../components/UI/LoadingSpinner';
import Error from '../Error';
import { fetchMoviesData } from '../../api/http';
import Movies from '../../components/User/Movies';

export default function MoviesPage() {
    let [searchTerm, setSearchTerm] = useState('now_playing');

    const { isLoading, isError, data } = useQuery({
        queryKey: ['movies', { search: searchTerm }],
        queryFn: ({ signal }) => fetchMoviesData({ signal, searchTerm })
    });
    if (isLoading) {
        return <LoadingSpinner />
    }
    if (isError) {
        return <Error messages='Failed to fetch data' />
    }

    function getCategory(category) {
        setSearchTerm(category)
    }

    return (
        <Movies data={data.results} getCategory={getCategory} />
    )
}
