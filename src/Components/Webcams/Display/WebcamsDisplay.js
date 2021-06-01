import React, {useEffect, useState, useContext} from 'react';
import {webcamQueryContext} from '../../../Systems/store'
import {getWebcamsData} from './Ext/getWebcamsData'

import CustomSelect from '../../Global/customSelect'

const WebcamsDisplay = ()=>{
    const [state, setState] = useState({})
    const [queries, setQueries] = useContext(webcamQueryContext)

    useEffect(()=>{
        getWebcamsData(queries)
        .then(value=>{
            setState(value)
        })
    }, [queries])

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
                    gender: query
                })
                break;
        
            default:
                break;
        }
    }

    return(
        <main className = "webcams-main">

            {state.tagList && <section classname = "component-nav">

                <CustomSelect class_key = {"gender"} selectedValue = {queries.gender} type = {"gender"}
                 setOption = {setOptions} options = {["female", "trans", "male", "couple"]} index = {0}/>

                <CustomSelect class_key = {"tags"} selectedValue = {queries.tag} type = {"tag"} setOption = {setOptions}
                 options = {state.tagList} index = {1}/>

            </section>}

            {state.dataList ?
                <section className = "webcams-grid">
                    {state.dataList.map(cam=>(
                        <div className="webcam-div" key = {cam.modelName}>
                            <a href={cam.link} target = "_blank">
                                <div className="img-div">
                                    <img src={cam.image} alt=""/>
                                    <p>{cam.modelName}</p>
                                </div>
                            </a>
                        </div>
                    ))}
                </section>
            : <h2>Loading</h2>}
            Webcams
        </main>
    )
}

export default WebcamsDisplay