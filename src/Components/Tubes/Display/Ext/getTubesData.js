

export const getTubesData = async(queries)=>{
    console.log(queries.category)
    let path = `?category=${queries.category}`
    let local = "http://localhost:3000/tubes"
    let Server = "https://react-app-npc53.ondigitalocean.app/api/tubes"
    let data = await fetch(Server + path)
    let response = await data.json()
    return response
}