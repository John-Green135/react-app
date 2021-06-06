

export const getTubesData = async(queries)=>{
    console.log(queries.category)
    let path = `?category=${queries.category}`
    let data = await fetch(`${process.env.REACT_APP_SERVER}/tubes${path}`)
    let response = await data.json()
    return response
}