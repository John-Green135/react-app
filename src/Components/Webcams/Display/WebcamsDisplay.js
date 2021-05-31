import React, {useEffect, useState, useContext} from 'react';
import {getWebcamsData} from './Ext/getWebcamsData'

const WebcamsDisplay = ()=>{
    const [state, setState] = useState({})

    useEffect(()=>{
        getWebcamsData()
        .then(value=>{
            setState(value)
        })
    }, [])

    return(
        <main className = "webcams-main">
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