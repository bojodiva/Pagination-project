import React, {Component} from "react";


class Home extends Component {

  
  
  constructor(props){
    super(props)
    this.state = {
      posts: [],
      loading: false,
      currentPage: 1,
      postsPerPage: 10,
    }
  }

  componentDidMount(){

  fetch('https://randomuser.me/api/?results=200')
  .then((response) => response.json())
  .then((response) => {
    this.setState({
      posts: response.results,
      loading: true
    })
  })
  }

  
  render(){
  var{loading} = this.state

    const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
    const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
    const currentPosts = this.state.posts.slice(indexOfFirstPost, indexOfLastPost);


    const pageNos = [];

      for ( let i = 1; i <= Math.ceil(this.state.posts.length/ this.state.postsPerPage); i++) {
         pageNos.push(i) ;                          
      }

    const setPage = (pageNo) => {
      this.setState({currentPage: pageNo})
    }



    
    

    if(!loading){
      return(
<div>Loading...</div>
      )
    }
    else{
      return(
        <div>
          {currentPosts.map(post => (
           <div className="container" key={post.id}>
             <h1 className="name">{post.name.title} {post.name.first} {post.name.last}</h1>
             <p className='dob'>{post.dob.age}  years old</p>  
             <p className='email'>{post.email}</p>

            <img className="image" src={post.picture.medium} alt={post.name.first}/>
             <hr></hr>
            </div>
      ))};
          <div>
     <span className="number" onClick={() => {setPage(currentPage - 1)}}>Prev</span>
           { 
              pageNos.map((pageNo, index) => (  <span   key={index} className="number" onClick={() => {setPage(pageNo)}}>
                {pageNo}
       </span>    
          ))}
            <span className="number" onClick={() => {setPage(currentPage + 1)}}>Next</span>
         
        </div>

       </div>   
      )
    }
    
  }
}

export default Home;