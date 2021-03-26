import React from 'react'
import Header from './Header'
import Cloverfield from '../Images/Cloverfield.png'
import Escape from '../Images/EscapePlan.png'
import Parademic from '../Images/Parademic.png'
import Search from './Search'

// banner component

function Banner() {
    return (
        <>
        <Header/>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img src={Cloverfield} className="banner d-block w-100" alt="..." />
            <div className="carousel-content">
                <h1 className="movieTitle">The Cloverfield Paradox</h1><h4 className="movieTitle"> (2018)</h4>
                <h5>Directed by : Julius Onah</h5>
                <br />
                <div className="row">
                    <div className="col-lg-1 col-md-1 col-sm-2 col-2">
                        <span><h3 className="movieTitle">5.5</h3>/10<br /></span>
                        <span><h5>IMDB</h5></span>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 col-9">
                        <p>Orbiting a planet on the brink of war, scientists test a device to solve an energy crisis, and end up face-to-face with a dark alternate reality.</p>
                        <button className="btn" style={{ color: 'inherit', border: '1px solid white', borderRadius: '10px' }}>know more</button>
                    </div>
                </div>
                <br />
                <h6>102 min</h6>
                <h6>Action, Horror, Sci-Fi, Thriller</h6>
                <h6>English, Mandarin, German</h6>
            </div>
            </div>
            <div className="carousel-item">
            <img src={Escape} className="banner img-fluid d-block w-100" alt="..." />
            <div className="carousel-content">
                <h1 className="movieTitle">Escape Plan</h1><h4 className="movieTitle"> (2013)</h4>
                <h5>Directed by : Mikael Håfström</h5>
                <br />
                <div className="row">
                    <div className="col-lg-1 col-md-1 col-sm-2 col-2">
                        <span><h3 className="movieTitle">6.7</h3>/10<br /></span>
                        <span><h5>IMDB</h5></span>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 col-9">
                        <p>When a structural-security authority finds himself set up and incarcerated in the world's most secret and secure prison, he has to use his skills to escape with help from the inside.</p>
                        <button className="btn" style={{ color: 'inherit', border: '1px solid white', borderRadius: '10px' }}>know more</button>
                    </div>
                </div>
                <br />
                <h6>115 min</h6>
                <h6>Action, Sci-Fi, Thriller</h6>
                <h6>English, German, Arabic, Urdu</h6>
            </div>
            </div>
            <div className="carousel-item">
            <img src={Parademic} className="banner img-fluid d-block w-100" alt="..." />
            <div className="carousel-content">
                <h1 className="movieTitle">The Paramedic</h1><h4 className="movieTitle"> (2020)</h4>
                <h5>Directed by : Carles Torras</h5>
                <br />
                <div className="row">
                    <div className="col-lg-1 col-md-1 col-sm-2 col-2">
                        <span><h3 className="movieTitle">5.6</h3>/10<br /></span>
                        <span><h5>IMDB</h5></span>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 col-9">
                        <p>Angel works in an ambulance service. After a tragic accident, his personal life begins to deteriorate as he becomes more and more suspicious of his partner Vane.</p>
                        <button className="btn" style={{ color: 'inherit', border: '1px solid white', borderRadius: '10px' }}>know more</button>
                    </div>
                </div>
                <br />
                <h6>94 min</h6>
                <h6>Action, Adventure, Crime, Drama, Thriller</h6>
                <h6>Spanish</h6>
            </div>
            </div>
        </div>
        </div>
        <Search />
    </>
    )
}

export default Banner
