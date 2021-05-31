import React, {useState, useContext, useEffect} from 'react';
import Searchbar from '../../Global/searchbar'
import LoadingGif from '../../Global/loadingGif'
import {tubeQueryContext} from '../../../Systems/store'
import {getTubesData} from './Ext/getTubesData'

const TubesDisplay = ()=>{
    const [state, setState] = useState([])
    const [queries, setQueries] = useContext(tubeQueryContext)

    useEffect(()=>{
        getTubesData()
        .then(value=>{
                setState(value)
        })
    }, [])


    return(
        <main className = "tubes-main">

            <section className = "component-nav">
                <div className="search-helper">
                    {queries.search === "" ? 
                    <p>Type your Search . .</p>
                    :<p>Choose a tube to search for <span>{queries.search}</span></p>    
                }
                </div>
                <Searchbar queries = {queries} setQueries = {setQueries}/>
            </section>

            {state.tubes ?
                <section className = "tubes-grid">
                    {state.tubes.map(tube=>(
                     <a href={`${tube.Link}${queries.search.replace(/ /g, tube.Concat)}${tube.Suffix}`} target = "_blank">
                     <div className="tube-div">
                         <h2>{tube.Name}</h2>
                     </div>
                 </a>
                    ))}
                </section>
            : <LoadingGif />}
        </main>
    )
}

export default TubesDisplay