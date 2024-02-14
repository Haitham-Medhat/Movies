
import { useQuery } from '@tanstack/react-query';
import { DifferentCategory } from '../../api/http';

export function useMoviesApi() {

    const { data: tv, isLoading: isTvLoading, isError: isTvError } = useQuery({
        queryKey: ['tv'],
        queryFn: ({ signal }) => DifferentCategory({ signal, type: 'tv' })
    });
    const { data: movies, isLoading: isMoviesLoading, isError: isMoviesError } = useQuery({
        queryKey: ['movie'],
        queryFn: ({ signal }) => DifferentCategory({ signal, type: 'movie' })
    });
    const { data: person, isLoading: isPersonLoading, isError: isPersonError } = useQuery({
        queryKey: ['person'],
        queryFn: ({ signal }) => DifferentCategory({ signal, type: 'person' })
    });

    if (isTvLoading || isMoviesLoading || isPersonLoading) {
        // Loading state
        return { isLoading: true, isError: false, tv: [], movies: [], person: [] };
    }

    if (isTvError || isMoviesError || isPersonError) {
        // Error state
        return { isLoading: false, isError: true, tv: [], movies: [], person: [] };
    }

    // Success state
    return { isLoading: false, isError: false, tv, movies, person };
}























// export function useMoviesApi (){
//     const [tv, setTv] = useState([]);
//     const [movies, setMovies] = useState([]);
//     const [person, setPerson] = useState([]);

//     console.log(tv)
//     console.log(movies)
//     console.log(person)
//     async function get(type ='trending' ,callback ){
//         let {data} = await axios.get(`https://api.themoviedb.org/3/trending/${type}/week?api_key=3c3176b172e1333dea35fb82ae9f5cf6`);
//         callback(data.results.splice(0,10));
//     }
//     useEffect(() => {
//         get('movie' , setMovies);
//         get('tv' , setTv);
//         get('person' , setPerson);
//     }, [setMovies , setPerson , setTv ]);

//     return {tv,movies,person};
// }


