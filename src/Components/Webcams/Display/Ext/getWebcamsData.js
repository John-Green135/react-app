

export const getWebcamsData = async()=>{
    let local = "http://localhost:3000/webcams"
    const data = await fetch(local)
    const response = await data.json()
    return response
}