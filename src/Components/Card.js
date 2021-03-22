import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import NoPicture from '../Images/NoPicture.png'

function Card({id}) {

    const [cardDetails, setCardDetails] = useState([])

    useEffect(() => {
    if(id){
        try {
        Axios.get(`https://www.omdbapi.com/?apikey=d39f7bfd&i=${id}`)
            .then((res)=> {
            setCardDetails(res.data)
            })
        }catch (error) {
            console.error(error);
        }  
    }
    },[id])

    return (
            <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                <div key={id} className="movie-tile m-2">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-6 px-0">
                            <img src={cardDetails.Poster === "N/A" ? NoPicture : cardDetails.Poster } className="img-fluid card-img-tile"/>
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
