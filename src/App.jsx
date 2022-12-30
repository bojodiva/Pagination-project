import './App.css';
import {Routes, Route, NavLink} from "react-router-dom";
import Posts from './components/Posts';
import ErrorBoundary from'./components/ErrorBoundary';




export default function App() {
 
 function Home(){
  return(
  <main>
    <NavLink  style= {({isActive}) => isActive ? {color:'red'} : {color: 'black'}}to="/" className="nav">Home</NavLink>
   
    <NavLink style= {({isActive}) => isActive ? {color:'red'} : {color: 'black'}} to="users" className= "nav"> Users </NavLink>

    <p className="note">Welcome to my pagination project</p>
    <p className="notes">click on users to see our users platform</p>
    </main>
    )
}


 function Users(){ 
   return(
  <main>
    
    <NavLink  style= {({isActive}) => isActive ? {color:'black'} : {color: 'red'}}to="/" className="nav">Home</NavLink>
   
    <NavLink style= {({isActive}) => isActive ? {color:'black'} : {color: 'red'}} to="users" className= "nav"> Users </NavLink>  
    
  <ErrorBoundary>
    <Posts/>
 </ErrorBoundary>
    
  </main>
    )
 }


   
  return(
    <main>
        <nav>
          <Routes>
           <Route path="/" element={<Home />} />
           <Route path="users" element={<Users />} />
           <Route path="*" element= { <h1 className="error">Not Found</h1>}/>
          </Routes>
         </nav>   
    </main>
  );
}
