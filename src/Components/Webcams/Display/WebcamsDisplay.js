import React, {useEffect, useState, useContext} from 'react';
import {webcamQueryContext} from '../../../Systems/store'
import {getWebcamsData} from './Ext/getWebcamsData'

import {createTransition} from '../../Functions/library'
import {paginate, getPageCount} from '../../Functions/paginate'

import CustomSelect from '../../Global/customSelect'
import LoadingGIF from '../../Global/loadingGif'
import Pagination from '../../Global/pagination'

const WebcamsDisplay = ()=>{
    const [state, setState] = useState({ dataList: [], tagList: [] })
    const [queries, setQueries] = useContext(webcamQueryContext)
    
    const [ready, setReady] = useState(false)
    const [loading, setLoading] = useState(0)

    const [webcamList, setWebcamList] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [numberOfPages, setNumberOfPages] = useState([])
    const itemsPerPage = 25

    useEffect(()=>{
        setReady(false)
        getWebcamsData(queries)
        .then(value=>{
            console.log(value)
            setNumberOfPages( getPageCount(value.dataList.length, itemsPerPage) )
            setTimeout(()=>{
                setState({
                    dataList: value.dataList,
                    tagList: value.tagList
                })
            }, 550)
        setCurrentPage(1)
            setState(value)
        })
    }, [queries])

    useEffect(()=>{
        setLoading(0)
        setReady(false)
        setWebcamList( paginate(state.dataList, currentPage, itemsPerPage) )
        setTimeout(()=>{
            setReady(true)
        }, 2000)
    }, [currentPage, state])

    const setOptions = (type, query)=>{
        switch (type) {
            case "tag":
                setQueries({
                    ...queries,
                    tag: query
                })
                break;
            case "gender":
                setQueries({
                    ...queries,
                    gender: query,
                    tag: "none"
                })
                break;
        
            default:
                break;
        }
    }

    useEffect(()=>{
        if(loading > 15){
            setReady(true)
        }
    }, [loading])

    useEffect(()=>{
        ready ? createTransition(100, "webcams-grid", null) : createTransition(0, "webcams-grid", 50)   
    }, [ready])

    return(
        <main className = "webcams-main">

            {state.tagList && <section className = "component-nav">

                <CustomSelect class_key = {"gender"} selectedValue = {queries.gender} type = {"gender"}
                 setOption = {setOptions} options = {["female", "trans", "male", "couple"]} index = {0}/>

                <CustomSelect class_key = {"tags"} selectedValue = {queries.tag} type = {"tag"} setOption = {setOptions}
                 options = {state.tagList} index = {1}/>

            </section> }

            {!ready && <LoadingGIF />}

                <section className = {ready ? "webcams-grid" : "webcams-grid none"}>
                    {webcamList.map(cam=>(
                        <div className="webcam-div" key = {cam.modelName}>
                            <a href={cam.link} target = "_blank">
                                <div className="img-div">
                                    <img src={cam.image} alt="" onLoad = {()=>setLoading(loading + 1)}/>
                                    <p>{cam.modelName}</p>
                                </div>
                            </a>
                        </div>
                    ))}
                </section>

                <Pagination currentPage = {currentPage} setCurrentPage = {setCurrentPage} numberOfPages = {numberOfPages}/>
        </main>
    )
}

export default WebcamsDisplay