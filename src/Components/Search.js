import React, {useEffect, useState} from 'react'
import Axios from 'axios'
import Card from './Card'
import { useQuery, useQueryUpdate } from '../MovieContext'
import useLoader from '../useLoader';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

toast.configure()


function Search() {

    const [data, setData] = useState([]);
    const [year, setYear] = useState()
    const [page, setPage] = useState(1)
    const [imdb, setImdb] = useState("")
    const search = useQuery()
    const setSearch = useQueryUpdate()
    const [loader, showLoader, hideLoader] = useLoader()
    const URL = `https://www.omdbapi.com/?apikey=${window.env.API_KEY}`

    window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight-2  && search !== "") {
            setPage(page+1)
        }
    };

    function notify() {
      toast.error("Enter Title/Year to search or search with IMDB ID", { position: toast.POSITION.TOP_CENTER, autoClose:4000 })
    }


    useEffect(() => {
        setData([])
        setPage(1)
    }, [search])


     useEffect(() => {
        try{
        Axios.get(`${URL}&s=${search}&page=${page}`)
        .then((res) => {
            if(data.length < +res.data.totalResults){
            setData([...data, ...res.data.Search])
            }
        })
        }catch (error) {
            console.error(error);
        }
    }, [page])


    
    const getResults = () =>{
        if(search && year){
            showLoader()
            try{
            let cancel
            Axios({
                    method:'GET',
                    url:URL,
                    params: {t: search, y: year},
                    cancelToken: new Axios.CancelToken(c => cancel = c)
                }).then(res => {
                    setData([res.data])
                    hideLoader()
                }).catch(e =>{
                    if(Axios.isCancel(e)) return
                })
                return () => cancel()
            }catch (error) {
                console.error(error);
            }
        }else if(search){
            showLoader()
            try{
                let cancel
                Axios({
                    method:'GET',
                    url:URL,
                    params: {s: search, page: page},
                    cancelToken: new Axios.CancelToken(c => cancel = c)
                }).then(res => {
                    setData(res.data.Search)
                    hideLoader()
                }).catch(e =>{
                    if(Axios.isCancel(e)) return
                })
                return () => cancel()
            }catch (error) {
                console.error(error);
            }
        }else if(imdb){
            showLoader()
            try{
            let cancel
            Axios({
                    method:'GET',
                    url:URL,
                    params: {i: imdb},
                    cancelToken: new Axios.CancelToken(c => cancel = c)
                }).then(res => {
                    setData([res.data])
                    hideLoader()
                }).catch(e =>{
                    if(Axios.isCancel(e)) return
                })
                return () => cancel()
            }catch (error) {
                console.error(error);
                
            }
        }else{
            notify()
        }   
    }

    

    return (
        <div>
            <h3 className=" mt-5 text-center">Explore more movies</h3><br />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-8">
                            <div className="text-center mt-3 search-div">
                                <div className="row">
                                    <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                                    <input value={search} onChange={(e) => setSearch(e.target.value)} className="p-2 m-2" placeholder="Search Title" />
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                                    <input value={year} onChange={(e) => setYear(e.target.value)} className="p-2 my-2" placeholder="Year" />
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                                    <input value={imdb} onChange={(e) => setImdb(e.target.value)} className="p-2 my-2" placeholder="ID" />
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                                    <button className="mt-2 searchButton" onClick={getResults}>Search</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-2"></div>
                    </div>
                </div>
            <div className="container mt-5">
                <div className="row">
                    {data === undefined ? null : data.map((item) => (
                    <Card id={item.imdbID} key={item.imdbID}/>
                    ))} 
                </div>
            </div>
            {loader}
        </div>
    )
}

export default Search
