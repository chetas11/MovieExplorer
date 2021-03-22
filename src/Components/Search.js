import React, {useState} from 'react'
import Parademic from '../Images/Parademic.png'
import Axios from 'axios'
import Card from './Card'

function Search() {

    const [data, setData] = useState([]);
    const [search, setSearch] = useState("")
    const [year, setYear] = useState()
    const [imdb, setImdb] = useState("")
    
    const getResults = () =>{
        if(search && year){
            try{
            Axios.get(`https://www.omdbapi.com/?apikey=d39f7bfd&t=${search}&y=${year}`)
            .then((res)=> {
                setData([res.data])
            })
            }catch (error) {
                console.error(error);
            }
        }else if(search){
            try{
            Axios.get(`https://www.omdbapi.com/?apikey=d39f7bfd&s=${search}`)
            .then((res)=> {
                setData(res.data.Search)
            })
            }catch (error) {
                console.error(error);
            }
        }else if(imdb){
            try{
            Axios.get(`https://www.omdbapi.com/?apikey=d39f7bfd&i=${imdb}`)
            .then((res)=> {
                setData([res.data])
                console.log(data)
            })
            }catch (error) {
                console.error(error);
            }
        }else{
            alert("Enter Title/Year to Search Or Search with IMDB ID")
        }
        
    }

    return (
        <div>
            <h3 className=" mt-5 text-center">Explore more movies</h3><br />
                <div className="container">
                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-10">
                            <div className="text-center p-2 mt-3" style={{background:'white', borderRadius:'10px'}}>
                                <input value={search} onChange={(e) => setSearch(e.target.value)} className="p-2 m-2" placeholder="Search Title" />
                                <input value={year} onChange={(e) => setYear(e.target.value)} className="p-2 m-2" placeholder="Year" />
                                <input value={imdb} onChange={(e) => setImdb(e.target.value)} className="p-2 m-2" placeholder="ID" />
                                <button className="searchButton" onClick={getResults}>Search</button>
                            </div>
                        </div>
                        <div className="col-1"></div>
                    </div>
                </div>
            <div className="container mt-5">
                <div className="row">
                    {data === undefined ? null : data.map((item) => (
                    <Card id={item.imdbID}/>
                    ))} 
                </div>
            </div>
        </div>
    )
}

export default Search
