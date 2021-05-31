import React, {useState, createContext} from 'react'

export const searchContext = createContext()
export const tubeQueryContext = createContext()
export const webcamQueryContext = createContext()

const Store = (props)=>{
    const [tubeQueries, setTubeQueries] = useState({
        search: "nothing",
        category: "All"
    })

    const [webcamQueries, setWebcamQueries] = useState({
        gender: "female",
        tag: "none"
    })
    const [pornstarQueries, setPornstarQueries] = useState({
        search: "nothing",
        gender: "Female",
        bodyType: "All"
    })


    return(
        <searchContext.Provider value = {[pornstarQueries, setPornstarQueries]}>
            <tubeQueryContext.Provider value = {[tubeQueries, setTubeQueries]}>
                <webcamQueryContext.Provider value = {[webcamQueries, setWebcamQueries]} >
                {props.children}
                </webcamQueryContext.Provider>
            </tubeQueryContext.Provider>
        </searchContext.Provider>

    )
}

export default Store