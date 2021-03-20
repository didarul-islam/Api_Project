import React from 'react';
import {newsCatagory} from '../news'


class Headers extends React.Component {

        state={
            searchTrem:''
        }

        handleChange=e=>{
            this.setState({
                searchTrem:e.target.value
            })
        }
        handleKeyPress=e=>{
            if(e.key=='Enter'){
                this.props.search(this.state.searchTrem)
            }
        }

    render() {
        const {category,changeCatagory}=this.props
        
        return (
            <div className='my-4'>
                <h1 className='mb-4' style={{fontWeight:300}}>
                    Block Buster Headlines
                 </h1>
                 <input
                 type='search'
                 className='form-control'
                 placeholder='Any thinks & Enter key search'
                 value={this.state.searchTrem}
                 onChange={this.handleChange}
                 onKeyPress={this.handleKeyPress}
                 />
                 <div className='my-4'>
                     {
                         newsCatagory && Object.keys(newsCatagory).map((item)=>{
                             if(category==newsCatagory[item]){
                                 return(
                                     <button onClick={()=>
                                        changeCatagory(newsCatagory[item])
                                     } 
                                     className='btn btn-sm btn-warning  mb-2' style={     {marginLeft:'.5rem'}}>
                                    {`# ${newsCatagory[item]}`}
                                     </button>
                                 )
                             }
                             return(
                                <button onClick={()=>
                                        changeCatagory(newsCatagory[item])
                                     }  
                                     className='btn btn-sm btn-light  mb-2' style={{marginLeft:'.5rem'}}>
                                         {`# ${newsCatagory[item]}`}
                                     </button>
                             )
                         })
                     }
                 </div>
                
            </div>
        );
    }
}



export default Headers;
