import React, {useState, useEffect, useRef} from 'react'

const Searchbar = ({queries, setQueries, searchList = []})=>{
  const [searchHelper, setSearchHelper] = useState([])
  const [viewHelper, setViewHelper] = useState(false)
  const searchRef = useRef()
    const searchHandle = (e) =>{
      let input = document.querySelector('.searchbar-input')

        if(e.key === "Enter"){
          setViewHelper(false)
          setQueries({
            ...queries,
            search: input.value
          })
        }
      }

      const helperHandle = (e)=>{
        if(searchRef.current.value.length > 0 && searchRef.current.value.length % 3 === 0){
          
          let list = []
          searchList.forEach(item=>{
            if(item.includes(searchRef.current.value)){
              list.push(item)
            }
          })
          if(list.length > 0){
            setSearchHelper(list)
            setViewHelper(true)
          }
        }else if(searchRef.current.value.length < 3){
          setSearchHelper([])
        }
      }

      const selectSearch = (search)=>{
        
        searchRef.current.value = search
        setSearchHelper([])
        setQueries({
          ...queries,
          search: search
        })
        setViewHelper(false)
      }


    return(
        <section>
          <div className="searchbar">

            <input className = "searchbar-input" type="text" placehoder = "" 
            ref = {searchRef} onChange = {helperHandle} onKeyDown = {searchHandle} 
            onFocus = {helperHandle}/>

              {viewHelper && <div className = "search-list-div">
              <p className = "sticky" onClick = {()=>setViewHelper(false)}>CLOSE</p>
              {searchHelper.map(item=>(
                <p onClick = {()=> selectSearch(item)}>{item}</p>
              ))}
            </div>}
          </div>
        </section>
    )
}

export default Searchbar