import React from 'react';


function SearchFound({totalResults,totalPage,currentPage}){
    return (
        <div className='d-flex'>
            <p className='text-black-50'>
                About {totalResults} result Found
            </p>
            <p className='text-black-50 ml-auto' style={{marginLeft:'13rem'}}>
                {currentPage} page of {totalPage}
            </p>
            
        </div>
    );
}

export default SearchFound;