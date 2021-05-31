import React from 'react';

const Pagination = ({currentPage, setCurrentPage, numberOfPages})=>{
    return(
        <section className = "pagination-grid">
        {numberOfPages.map(page=>(
            <div className = {currentPage === parseInt(page) ? "selected-page" :"page-number-div"} key = {page} onClick = {()=> setCurrentPage(parseInt(page))}>
                <h2>{page}</h2>
            </div>
        ))}
    </section>
    )
}

export default Pagination