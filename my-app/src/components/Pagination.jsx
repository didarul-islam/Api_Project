import React from 'react';


class Pagination extends React.Component {
   
   state={
       isEditTable:false
   }

    render() {
        const{
     isNext,
      isPrev,
      next,
      prev,
     currentPage,
      totalPage,
      handlePageChange,
      goToPage
      
        }=this.props
        return (
            <div className='d-flex my-5 align-items-center'>
                <button className='btn btn-warning'  disabled={!isPrev} onClick={()=>{
                    prev()
                }}>Previus</button>
                
                    <div className='flex-grow-1 text-center'>
                        {
                            this.state.isEditTable?(
                                <input
                                type='number'
                                value={currentPage}
                                onChange={(e)=>handlePageChange(e.target.value)}
                                onKeyPress={(e)=>{
                                    if(e.key=='Enter'){
                                        goToPage()
                                     this.setState({isEditTable:false})
                                    }
                                }}
                                />
                            ):(
                                <p style={{userSelect:'none',lineHeight:'1.1'}}
                                title='Double Tap to Jump page'
                                onDoubleClick={()=>{
                                    this.setState({isEditTable:!this.state.isEditTable})
                                }}
                                >
                                    {currentPage} of {totalPage}
                                    <br/>
                                    <small>Double Tap to Edit</small>

                                </p>
                            )
                        }

                    </div>
                
                <button className='btn btn-warning ml-auto' disabled={!isNext} onClick={()=>{
                    next()
                }}>Next</button>
                
            </div>
        );
    }
}



export default Pagination;
