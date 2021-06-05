import React from 'react'

const ModelLinks = ({links}) =>{
    return(
        <section className = "model-links-section">
            {links.length > 0 ?
            links.map(link=>(
                <div><h2><a href={link} target = "_blank">{link}</a></h2></div>
            ))   
        : <div><h2>No Links Found</h2></div>}
        </section>
    )
}

export default ModelLinks