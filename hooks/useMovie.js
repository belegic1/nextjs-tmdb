import { useQuery } from "react-query"
import axios from "axios"

const key = '7ebdafc7e41c27a3349891497023a098'


export default function useMovie(id) {
    return useQuery(['movie', id],()=> axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`
    ) .then(res => res.data)
      
        

    )
}