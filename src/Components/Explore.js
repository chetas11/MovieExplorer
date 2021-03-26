import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import Card from './Card'
import env from "react-dotenv"



export default function Explore({year}) {

    const [cardDetails, setCardDetails] = useState([])
    const commonWords = ["New", "Mission", "star", "now", "night", "get", "war"] // array of random words
    let random = Math.floor(Math.random() * commonWords.length)                  // for random number       

    //function to fetch the movie suggestion from same year

    useEffect(() => {
    if(year){
        try {
        Axios.get(`https://www.omdbapi.com/?apikey=${env.API_KEY}&s=${commonWords[random]}&y=${year}`)
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
