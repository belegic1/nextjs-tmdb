import '../styles/globals.css'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import {useState} from "react"

function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());
  return <QueryClientProvider client={queryClient}>
    <Component {...pageProps} />
  </QueryClientProvider>
}
// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

export default MyApp
