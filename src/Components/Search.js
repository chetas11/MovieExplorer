import React from 'react'
import Parademic from '../Images/Parademic.png'

function Search() {
    return (
        <div>
            <h3 className="mt-5 text-center">Explore more movies</h3><br />
            <div className="text-center p-2 mt-3" style={{background:'white'}}>
                <input className="p-2 m-2" placeholder="Search Title" />
                <input className="p-2 m-2" placeholder="Year" />
                <input className="p-2 m-2" placeholder="ID" />
                <button className="searchButton">Search</button>
            </div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                            <img className="img-fluid" src={Parademic}/>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                <h4>Inception</h4><br />
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </div>
    )
}

export default Search
