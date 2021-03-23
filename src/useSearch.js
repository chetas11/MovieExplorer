import {useState, useEffect} from 'react'
import Axios from 'axios'

export default function useSearch(query, pageNumber) {

    const [hasMore, setHasMore] = useState(false)
    const [newData, setData] = useState([])

    useEffect(() => {
        let cancel
        Axios({
            method:'GET',
            url:'https://www.omdbapi.com/?apikey=d39f7bfd',
            params: {s: query, page: pageNumber},
            cancelToken: new Axios.CancelToken(c => cancel = c)
        }).then(res => {
            console.log(res.data.Search)
            setData((prevData) => {
                return([...prevData, res.data.map(b => b.imdbID)])
            })
            setHasMore(res.data.Search > 0)
        }).catch(e =>{
            if(Axios.isCancel(e)) return
        })
        return () => cancel()
    }, [query, pageNumber])
    return {newData, hasMore}
}

