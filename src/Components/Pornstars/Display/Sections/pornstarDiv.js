import {Link} from 'react-router-dom'

const PornstarDiv = ({model, loading, setLoading}) =>{
    return(
        <Link to = {`/pornstars/${model.Name.toLowerCase().replace(/ /g, "-")}`}><div className = "model-div" key = {model.Name}>
            <img src={model.featureImg} alt="" onLoad = {()=>setLoading(loading + 1)}/>
            <h3 className = {model.Name.length > 15 ? "long" : "short"}>{model.Name}</h3>
            
        </div></Link>
    )
}

export default PornstarDiv