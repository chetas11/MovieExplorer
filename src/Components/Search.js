import React from 'react'

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
        </div>
    )
}

export default Search
