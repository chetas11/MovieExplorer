import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import { useHistory } from "react-router-dom";
import NoPicture from '../Images/NoPicture.png'
import { useUpdateMovieId } from '../MovieContext'
import env from "react-dotenv"

function Card({id}) {

    const [cardDetails, setCardDetails] = useState([])          // to store each movie detail
    const history = useHistory();
    const setMovieID = useUpdateMovieId()                       

    useEffect(() => {                                           // render each card
    if(id){
        try {
        Axios.get(`https://www.omdbapi.com/?apikey=${env.API_KEY}&i=${id}`)
            .then((res)=> {
            setCardDetails(res.data)
            })
        }catch (error) {
            console.error(error);
        }  
    }
    },[id]) 

    const handleClick = () => {                                 // navigate to full details page
        setMovieID(id)
        history.push("/movie")
    }

    return (
            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                <div onClick={handleClick} key={cardDetails.imdbID} className="movie-tile m-2">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-6 px-0">
                            <img src={cardDetails.Poster === "N/A" ? NoPicture : cardDetails.Poster } alt="poster" className="card-img-tile"/>
                        </div>
                        <div className="card-info-div col-lg-6 col-md-6 col-sm-6 col-6">
                            <h5>{cardDetails.Title}</h5><br />
                            <p className="card-info mb-0">Directed by:</p>
                            {cardDetails.Director}
                            <p className="card-info info mb-0 mt-2">IMDB</p>
                            {cardDetails.imdbRating}
                            <p className="card-info mb-0 mt-2">Genere</p>
                            {cardDetails.Genre}
                        </div>  
                    </div> 
                </div>
            </div> 
    )
}

export default Card
