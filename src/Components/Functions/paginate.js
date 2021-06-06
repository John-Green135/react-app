

export const paginate = (itemList, currentPage, itemsPerPage) => {
    
    let pageList = []
    let start = (currentPage - 1) * itemsPerPage
    let end = 0 
    if(currentPage * itemsPerPage > itemList.length){
        end = itemList.length
    }else{
        end = currentPage * itemsPerPage
    }

    for(let i = start; i < end; i++){
            pageList.push(itemList[i])
    }

    return pageList
}

export const getPageCount = (length, itemsPerPage)=>{
    console.log(length)
    let pageCount = 1
    let pageList = []
    let a = length % itemsPerPage

    if(length <= itemsPerPage){
        pageCount = 1
    }else if(a === 0){
        pageCount = length / itemsPerPage
    }else{
        pageCount = Math.floor( length / itemsPerPage ) + 1
    }
    for(let i =1; i < pageCount + 1; i++){
        pageList.push(i)
    }
    return pageList
}