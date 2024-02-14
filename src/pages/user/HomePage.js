 
import { useMoviesApi } from '../../components/util/Movies-HookApi';
import Home from '../../components/User/Home';
import LoadingSpinner from '../../components/UI/LoadingSpinner'; 
import Error from '../Error';

export default function HomePage() {
    
  let { isLoading, isError, tv, movies, person } = useMoviesApi();
  if (isLoading) {
    return <LoadingSpinner />
  }
  if (isError) {
    return <Error messages='Failed to fetch data' />
  }
  return (
    <Home tv={tv} movies={movies} person={person}/>
  )
}
