import React, {useState, useEffect} from 'react';

const ModelTubes = ({model})=>{
    const [state, setState] = useState({})
    const [tubeSearch, setTubeSearch] = useState("")

    useEffect(()=>{
        getTubeData().then(value=>{
            console.log(value)
            setState(value)
        })
    }, [])

    const handleSearch = (e)=>{
        if(e.key === "Enter"){
            setTubeSearch(e.target.value)
        }
    }


    const getTubeData = async()=>{
        let response = await fetch(`http://localhost:3000/tubes/model-profile?gender=Female`)
        let data = response.json()
        return data
    }

    const createLink = (tube)=>{
        let search = `${model.Name} ${tubeSearch}`
        return `${tube.Link}${search.replace(/ /g, tube.Concat)}${tube.Suffix}`
    }
    return(
        <section className = "model-tube-section">
            <div className="component-nav">
                <div className="searchbar">
                    <p className = "search-helper">Search for <span>{model.Name}</span> + <span>{tubeSearch}</span></p>
                    <input type="text" className = "searchbar-input" onKeyDown = {handleSearch}/>
                </div>
            </div>
            
            <div className = "model-tube-grid">
                {state.tubes  ? 
                state.tubes.map(tube=>(
                    <a href={createLink(tube)} target = "_blank">
                        <div className = "tube-div"><h2>{tube.Name}</h2></div>
                    </a>
                ))    
            : <div>Loading</div>}
            </div>
        </section>

    )
}

export default ModelTubes