import React, {useEffect, useState, useContext} from 'react'
import {getPornstars} from './Ext/getPornstars'
import {searchContext} from '../../../Systems/store'

import {paginate, getPageCount} from '../../Functions/paginate'
import {createTransition} from '../../Functions/library'

import LoadingGif from '../../Global/loadingGif'
import Pagination from '../../Global/pagination'
import Searchbar from '../../Global/searchbar'
import CustomSelect from '../../Global/customSelect'
import PornstarDiv from './Sections/pornstarDiv'

const PornstarDisplay = ()=>{
    const [queries, setQueries] = useContext(searchContext)
    
    const [pageData, setPageData] = useState( { modelList: [], bodyTypes: [] } )
    const [pornstarList, setPornstarList] = useState([])

    const [currentPage, setCurrentPage] = useState(1)
    const [numberOfPages, setNumberOfPages] = useState([])
    const itemsPerPage = 18
 
    const [loading, setLoading] = useState(0)
    const [ready, setReady] = useState(false)

    useEffect(()=>{
        setLoading(0)
        setReady(false)
        getPornstars('/pornstars', queries).then(value=>{
            console.log(value)
            setNumberOfPages( getPageCount(value.modelList.length, itemsPerPage) )
            setTimeout(()=>{
                setPageData({
                    modelList: value.modelList,
                    bodyTypes: value.bodyTypes
                })
            }, 550)
        setCurrentPage(1)
        })
    }, [queries])

    useEffect(()=>{
        setLoading(0)
        setReady(false)
        setPornstarList( paginate(pageData.modelList, currentPage, itemsPerPage) )
        setTimeout(()=>{
            setReady(true)
        }, 2000)
    }, [currentPage, pageData])

    useEffect(()=>{
        console.log(loading)
        if(pornstarList.length > 0 && loading >= itemsPerPage - 5){
            setReady(true)        
        }

    }, [loading])

    useEffect(()=>{
        ready ? createTransition(100, "model-display-grid", null) : createTransition(0, "model-display-grid", 50)   
    }, [ready])

    const changeQueries = (type, value)=>{
        switch (type) {
            case "gender":
                setQueries( { ...queries, gender: value } )
                break;
            case "bodyType":
                setQueries( { ...queries, bodyType: value } )
                break;
        
            default:
                break;
        }

    }

    return(
        <main className = "model-display-main component-main">
            <section className = "component-nav">
                <p className = "search-helper">
                    Searching for <span>{queries.search}</span> in <span>{queries.gender} Pornstars</span>
                </p>
                <Searchbar queries = {queries} setQueries = {setQueries}/>

                <CustomSelect class_key = "gender-select" type = "gender" selectedValue = {queries.gender} setOption = {changeQueries}
                options = {["All", "Female", "Trans"]} index = {0}/>

                <CustomSelect class_key = "body-type-select" type = "bodyType" selectedValue = {queries.bodyType} setOption = {changeQueries}
                options = {pageData.bodyTypes} index = {1}/>
            </section>

            { !ready && <LoadingGif /> }
             <section className = {ready ? "model-display-grid" : "model-display-grid none"}>
                { pornstarList.map(model=>(
                        <PornstarDiv model = {model} loading = {loading} setLoading = {setLoading}/>
                    ))}           
            </section> 
            
            <Pagination currentPage = {currentPage} setCurrentPage = {setCurrentPage} numberOfPages = {numberOfPages}/>

        </main>
    )
}

export default PornstarDisplay