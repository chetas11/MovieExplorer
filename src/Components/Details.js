import React, {useState, useEffect} from 'react'
import { useMovieId } from '../MovieContext'
import { useHistory } from "react-router-dom";
import { useQueryUpdate } from '../MovieContext'
import Axios from 'axios'
import Explore from './Explore'
import env from "react-dotenv"

function Details() {
    const movieID = useMovieId()                            
    const history = useHistory();
    const [movieDetails, setMovieDetails] = useState([])        // to store the full details of movie
    const setSearch = useQueryUpdate()

    useEffect(() => {                                           // fetch request when movie id changes
    if(movieID){
        try {
        Axios.get(`https://www.omdbapi.com/?apikey=${env.API_KEY}&i=${movieID}&plot=full`)
            .then((res)=> {
            setMovieDetails(res.data)
            })
        }catch (error) {
            console.error(error);
        }  
    }else{
        history.push("/error")
    }
    },[movieID])

    const handleClick = () => {                         // close button function
        setSearch("")
        history.push("/")
    }

    return (
        <>
        <div className="detail-banner container-fluid">
            <button onClick={handleClick} className="close">X</button>
            <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                    <div className="img-tile">
                        <img className="detail-img-small" style={{width:'100%', borderRadius:"10px"}} alt="poster" src={movieDetails.Poster} />
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
        <div className="container">
            <div className="row mt-2">
                <div className="col-lg-2 col-md-2 col-sm-3 col-3">
                    <h3>Actors : </h3>
                </div>
                <div className="col-lg-5 col-md-6 col-sm-8 col-9">
                    <p className="mt-1">{movieDetails.Actors}</p>
                </div>
            </div>
        </div>
        <div className="container mt-5">
            <h3>Explore more movies</h3>
            <Explore year={movieDetails.Year} />
        </div>
        </>
    )
}

export default Details
