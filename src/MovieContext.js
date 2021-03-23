import React, { useContext, useState } from 'react'

// Context to pass the data 

const IdContext = React.createContext()
const IdUpdateContext = React.createContext()
const QueryContext = React.createContext()
const QueryUpdateContext = React.createContext()

export function useMovieId(){
    return useContext(IdContext)
}

export function useUpdateMovieId(){
    return useContext(IdUpdateContext)
}

export function useQuery(){
    return useContext(QueryContext)
}

export function useQueryUpdate(){
    return useContext(QueryUpdateContext)
}




export function MovieIdProvider({ children }){
    const [movieID, setMovieID] = useState()
    const [query, setQuery] = useState("")

    return(
        <IdUpdateContext.Provider value={setMovieID}>
            <IdContext.Provider value={movieID}>
                <QueryUpdateContext.Provider value={setQuery}>
                    <QueryContext.Provider value={query}>
                        {children}
                    </QueryContext.Provider>
                </QueryUpdateContext.Provider>
            </IdContext.Provider>
        </IdUpdateContext.Provider>
    )
}

