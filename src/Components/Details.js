import React, {useState, useEffect} from 'react'
import { useMovieId } from '../MovieContext'
import { useHistory } from "react-router-dom";
import Axios from 'axios'
import Explore from './Explore'



function Details() {
    const movieID = useMovieId()
    const history = useHistory();
    const [movieDetails, setMovieDetails] = useState([])

    useEffect(() => {
    if(movieID){
        try {
        Axios.get(`https://www.omdbapi.com/?apikey=d39f7bfd&i=${movieID}&plot=full`)
            .then((res)=> {
            setMovieDetails(res.data)
            })
        }catch (error) {
            console.error(error);
        }  
    }
    },[movieID])


    return (
        <>
        <div className="detail-banner">
            <button onClick={() => history.push("/") } className="close">X</button>
            <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                    <div className="img-tile">
                        <img style={{width:'100%', borderRadius:"10px"}} src={movieDetails.Poster} />
                    </div>
                </div>
                <div className="details-div col-lg-5 col-md-5 col-sm-8 col-6">
                    <h1>{movieDetails.Title}</h1>
                    <h4>Directed by : {movieDetails.Director}</h4>
                    <br />
                    <h6>{movieDetails.Runtime}</h6>
                    <h6>{movieDetails.Genre}</h6>
                    <h6>{movieDetails.Language}</h6>
                </div>
                <div className="rating-div col-lg-4 col-md-2 col-sm-2">
                    <div className="row">
                        <div className = "col-3 rating">
                            <span><h3 className="movieTitle">{movieDetails.imdbRating}</h3>/10<br /></span>
                            <span><p>IMDB</p></span>
                        </div>
                        <div className = "col-5 rating">
                            <span><h3 className="movieTitle">{movieDetails.Ratings && movieDetails.Ratings[1]  ? movieDetails.Ratings[1].Value : 'NA' }</h3><br /></span>
                            <span><p>Rotten Tomato</p></span>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
        <div className="container plot">
            <div className="row">
                <div className="col-lg-2 col-md-2 col-sm-3 col-3">
                    <h3>Plot: </h3>
                </div>
                <div className="col-lg-5 col-md-6 col-sm-8 col-9">
                    <p>{movieDetails.Plot}</p>
                </div>
            </div>
        </div>
        <div className="container mt-5">
            <h3>Explore more movies</h3>
            <Explore year={movieDetails.Year} title={movieDetails.Title} />
        </div>
        </>
    )
}

export default Details
