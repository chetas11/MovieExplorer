import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import { useQuery } from '../MovieContext'
import Card from './Card'



export default function Explore({year}) {

    const [cardDetails, setCardDetails] = useState([])
    const Query = useQuery()

    useEffect(() => {
    if(year && Query){
        try {
        Axios.get(`https://www.omdbapi.com/?apikey=d39f7bfd&s=${Query}&y=${year}`)
            .then((res)=> {
            setCardDetails(res.data.Search)
            })
        }catch (error) {
            console.error(error);
        }  
    }
    },[year])

    return (
        <div className="row">
            {cardDetails === undefined ? null : cardDetails.splice(0,3).map((item) => (
            <Card id={item.imdbID} key={item.imdbID}/>
            ))} 
        </div>
    )
}
