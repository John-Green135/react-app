

export const getWebcamsData = async(queries)=>{
    let path = "?"
    for (const [key, value] of Object.entries(queries)) {
        path = `${path}${key}=${value}&`
    }

    let local = "http://localhost:3000/webcams"
    let Server = "https://react-app-npc53.ondigitalocean.app/api/webcams"
    const data = await fetch(Server + path)
    const response = await data.json()
    return response
}