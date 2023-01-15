import React, {Component} from "react";


class Home extends Component {

  
  
  constructor(props){
    super(props)
    this.state = {
      posts: [],
      loading: false,
      currentPage: 1,
      postsPerPage: 20,
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

  handleDecrement = () => {
    if (this.state.currentPage > 1) {
       this.setState({currentPage: this.state.currentPage - 1})
    }
    
  }

  handleIncrement = () => {
    if ((this.state.currentPage * this.state.postsPerPage) < this.state.posts.length) {
       this.setState({currentPage: this.state.currentPage + 1})
    }
    
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
             
            </div>
      ))}
          <div className="page--link">
     <div className="number" onClick={this.handleDecrement}>Prev</div>
           { 
              pageNos.map((pageNo, index) => (  <div  key={index} className="number" onClick={() => {setPage(pageNo)}}>
                {pageNo}
       </div>    
          ))}
            <div className="number" onClick={this.handleIncrement}>Next</div>
         
        </div>

       </div>   
      )
    }
    
  }
}

export default Home;