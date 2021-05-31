

export const getTubesData = async()=>{
    let local = "http://localhost:3000/tubes"
    let Server = "https://react-app-npc53.ondigitalocean.app/api/tubes"
    let data = await fetch(Server)
    let response = await data.json()
    return response
}