import React, {useEffect, useState} from 'react';
import ProfileData from './Sections/profileData'
import ModelLinks from './Sections/modelLinks'
import ModelTubes from './Sections/modelTubes'
import ModelPornStats from './Sections/modelPornStats'

const PornstarProfile = (props)=>{
    const [modelProfile, setModelProfile] = useState({}) 
    const [dataPage, setDataPage] = useState("stats")
    const [modelData, setModelData] = useState([])

    useEffect(()=>{
        getModelData( window.location.pathname.split("/")[2] )
        .then(value=>{
            console.log("Value", value)
            setModelProfile(value)
        })
    },[])

    useEffect(()=>{
        let list = []
        for(const[key, value] of Object.entries(modelProfile)){
            let pair = [key, value]
            list.push(pair)
        }
        setModelData(list)
        console.log("modelProfile", modelProfile)
    }, [modelProfile])

    const getModelData = async(model)=>{
        let response = await fetch(`http://localhost:3000/pornstars/profile/${model}`)
        let data = await response.json()
        return data
    }
    
    return(
        <main className = "pornstar-profile-main">
            {modelProfile.Name &&
            <section className = "model-profile-grid">           
                <div className = "img-div">
                    <img src={modelProfile.featureImg} alt=""/>
                </div>
                <div className="model-data">
                    <div className="top-section">
                        <div className = "model-name" onClick = {()=>setDataPage("stats")}><h1>{modelProfile.Name}</h1></div>
                        <div className="profile-nav">
                            <div onClick = {()=>setDataPage("stats")}><h2>Stats</h2></div>
                            <div onClick = {()=>setDataPage("links")}><h2>Links</h2></div>
                            <div onClick = {()=>setDataPage("tubes")}><h2>Tubes</h2></div>
                            <div onClick = {()=>setDataPage("porn stats")}><h2>Porn Stats</h2></div>
                        </div>
                </div>
                    {dataPage === "stats" && <ProfileData model= {modelProfile} />}
                    {dataPage === "links" && <ModelLinks links= {modelProfile.Links} />}
                    {dataPage === "tubes" && <ModelTubes model = {modelProfile}/>}
                    {dataPage === "porn stats" && <ModelPornStats />}
                </div>
            </section>
            }
        </main>
    )
}

export default PornstarProfile