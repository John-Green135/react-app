

export const getWebcamsData = async()=>{
    let local = "http://localhost:3000/webcams"
    let Server = "https://react-app-npc53.ondigitalocean.app/api/webcams"
    const data = await fetch(Server)
    const response = await data.json()
    return response
}