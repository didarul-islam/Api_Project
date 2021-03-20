import React from 'react';
import axios from 'axios'
import News, {newsCatagory} from './news/index'
import Headers from './components/Headers'
import NewsList from './components/NewsList'
import Pagination from './components/Pagination'
import SearchFound from './components/Search-Found'
import Loading from './components/Loading'


const news=new News(newsCatagory.technology)


// const fackNews=[
//   {
//     title:'title',
//     content:'content',
//     url:'https://linktonews.com',
//     urlToImage:'https://linktoimage.com',
//     publishedAt:'published date and time',
//     source:{
//       name:'CNN',
//     },

//   },
//   {
//     title:'title',
//     content:'content',
//     url:'https://linktonews.com',
//     urlToImage:'https://linktoimage.com',
//     publishedAt:'published date and time',
//     source:{
//       name:'CNN',
//     },

//   }
// ]


// const URL='https://jsonplaceholder.typicode.com/users'
// axios.get(URL)
// .then((res)=>{
//   console.log(res.data);
// })

// const user={
//   name:'Md.Didarul Islam',
//   Email:'didaruli600@gamil.com',
//   username:'Kawsar'
// }

// axios.post(URL,user)
// .then((res)=>{
//   console.log(res);
// })


class App extends React.Component {

  // state={
  //   news:[],
  //   category:newsCatagory.technology

  // }

  //  changeCatagory=(category)=>{

  //   this.setState({category})

  // } 
  state={
    data:{},
    isLoading:true
  }

  componentDidMount(){
    // const url=`${process.env.REACT_APP_NEWS_URL}?apiKey=${process.env.REACT_APP_NEWS_API_KEY}
    // &category=${this.state.category}&pageSize=5`;
  

    // axios
    // .get(url)
    // .then((response)=>{
      
    //  this.setState({
       
    //    news:response.data.articles,
    //  })
    // })
    // .catch((e)=>{
    //   console.log(e);
    // })

    // const news=new News(newsCatagory.technology)
    // news.getNews().then((data)=>{
    //   console.log(data);
    // })

    news.getNews()
    .then((data)=>{
      this.setState({data,isLoading:false})
    })
    .catch((e)=>{
      console.log(e);
      alert('something want wrong')
      this.setState({isLoading:false})
    })

 
  }

  next=()=>{
    if(this.state.data.isNext){
      this.setState({isLoading:true})
    }
    news.next()
    .then(data=>{
      this.setState({data,isLoading:false})
    })
    .catch(e=>{
      console.log(e);
      alert('something want wrong')
      this.setState({isLoading:false})
    })
  }
  prev=()=>{
    if(this.state.data.isPrev){
      this.setState({isLoading:true})
    }
    news.prev()
    .then(data=>{
      this.setState({data,isLoading:false})
    })
    .catch(e=>{
      console.log(e);
      alert('something want wrong')
      this.setState({isLoading:false})
    })
  }

  handlePageChange=(value)=>{
    this.setState({
      data:{
        ...this.state.data,
        currentPage:Number.parseInt(value)
      }
    })
  }

  goToPage=()=>{
    this.setState({isLoading:true})
    news.setCurrentPage(this.state.data.currentPage)
    .then(data=>{
      this.setState({data,isLoading:false})
    })
    .catch(e=>{
      console.log(e);
      alert('something want wrong')
      this.setState({isLoading:false})
    })
  }


  changeCatagory=(category)=>{
    this.setState({isLoading:true})
    news.changeCatagory(category)
    .then(data=>{
      this.setState({data,isLoading:false})
    })
    .catch(e=>{
      console.log(e);
      alert('something want wrong')
      this.setState({isLoading:false})
    })
  }

  search=(searchTrem)=>{
    this.setState({isLoading:true})
    news.search(searchTrem)
    .then(data=>{
      this.setState({data,isLoading:false})
    })
    .catch(e=>{
      console.log(e);
      alert('something want wrong')
      this.setState({isLoading:false})
    })
  }

  // componentDidUpdate(prevProps,prevState){
  //   // if(prevState.category !==this.state.category){
  //   //    const url=`${process.env.REACT_APP_NEWS_URL}?apiKey=${process.env.REACT_APP_NEWS_API_KEY}
  //   // &category=${this.state.category}&pageSize=5`;
  

  //   // axios
  //   // .get(url)
  //   // .then((response)=>{
      
  //   //  this.setState({
       
  //   //    news:response.data.articles,
  //   //  })
  //   // })
  //   // .catch((e)=>{
  //   //   console.log(e);
  //   // })
  //   // }
  // }

 
 

  render() {
    const{
      article,
      category,
      isNext,
      isPrev,
      totalResults,
      currentPage,
      totalPage,
      

    }=this.state.data
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-sm-6 offset-md-3'>
          <Headers 
          category={category}
          changeCatagory={this.changeCatagory}
          search={this.search}
          />
          <SearchFound totalPage={totalPage}
          totalResults={totalResults}
          currentPage={currentPage}
          />

          {this.state.isLoading?
          (
            <Loading/>
          ):(
            <div>
              <NewsList news={article}/>
              <Pagination
              next={this.next}
              prev={this.prev}
              isPrev={isPrev}
              isNext={isNext}
              totalPage={totalPage}
              currentPage={currentPage}
              handlePageChange={this.handlePageChange}
              goToPage={this.goToPage}
              />
            </div>
          )
          }
          
        
          

          </div>

        </div>
        
      </div>
    );
  }
}



export default App;

