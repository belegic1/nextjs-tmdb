import { useQuery } from "react-query"
import axios from "axios"
const key = '7ebdafc7e41c27a3349891497023a098'



export default function useVideos(id) {
    return useQuery(['video', id], () => axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}&language=en-US`).then(res => res.data)
    )
}