import React, {useState, useContext, useEffect} from 'react';
import {tubeQueryContext} from '../../../Systems/store'

import {getTubesData} from './Ext/getTubesData'
import Searchbar from '../../Global/searchbar'
import LoadingGif from '../../Global/loadingGif'
import CustomSelect from '../../Global/customSelect'

const TubesDisplay = ()=>{
    console.log(process.env.REACT_APP_SERVER)
    const [state, setState] = useState({
        tubes: [],
        categories: []
    })
    const [queries, setQueries] = useContext(tubeQueryContext)

    useEffect(()=>{
        getTubesData(queries)
        .then(value=>{
            setState(value)
        })
    }, [queries])


    const setOptions = (type, query)=>{
        switch (type) {
            case "category":
                setQueries({
                    ...queries,
                    category: query
                })
                break;
        
            default:
                break;
        }
    }


    return(
        <main className = "tubes-main">

            <section className = "component-nav">
                <div className="search-helper">
                    {queries.search === "nothing" ? 
                    <p>Type your Search . .</p>
                    :<p>Choose a tube to search for <span>{queries.search}</span></p>    
                }
                </div>
                <Searchbar queries = {queries} setQueries = {setQueries}/>

                <CustomSelect class_key = {"category"} selectedValue = {queries.category} type = {"category"}
                 setOption = {setOptions} options = {state.categories} index = {0}/>

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