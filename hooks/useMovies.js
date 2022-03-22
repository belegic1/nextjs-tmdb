import { useQuery } from "react-query"
import axios from "axios"

const key = '7ebdafc7e41c27a3349891497023a098'


export default function useMovies() {
    return useQuery('movies', ()=> axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`)
        .then(res => res.data.results)
        
        
    )
}