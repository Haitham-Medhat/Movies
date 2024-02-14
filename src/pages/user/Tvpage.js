 
import { useState } from 'react';
import LoadingSpinner from '../../components/UI/LoadingSpinner';
import Tv from '../../components/User/Tv';
import Error from '../Error';
import { useQuery } from '@tanstack/react-query';
import { fetchTvData } from '../../api/http'; 

export default function Tvpage() {
    let [searchTerm, setSearchTerm] = useState('popular');
    const { isLoading, isError, data } = useQuery({
        queryKey: ['tv', { search: searchTerm }],
        queryFn: ({ signal }) => fetchTvData({ signal, searchTerm }),
    })
    if (isLoading) {
        return <LoadingSpinner />
    }
    if (isError) {
        return <Error messages='Failed to fetch data' />
    }
    function getCategory(category) {
        setSearchTerm(category)
    };
    return (
    <Tv data={data.results} getCategory={getCategory}/>
  )
}
