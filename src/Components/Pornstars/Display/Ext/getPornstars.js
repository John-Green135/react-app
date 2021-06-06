

export const getPornstars = async(root_path, queries)=>{
    let response = await fetch(`${process.env.REACT_APP_SERVER}${buildPath(root_path, queries)}`) 
    let data = await response.json()
    return data
}


const buildPath = (root_path, queries) =>{
    if(queries.search === "nothing"){
        queries.search = "ash"
    }
    let path = root_path + "?"
    let path_list = [
        `search=${queries.search}`,
        `gender=${queries.gender}`

    ]

    path_list.forEach(item=>{
        path = `${path}${item}&`
    })
    return path
}