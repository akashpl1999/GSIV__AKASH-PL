import React,{useState} from "react";
import "../Style/Navbar.css";
import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import {fetchSearchResults} from '../Redux/action'
import { Link ,useLocation} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


function Navbar({onSearch}) {
  const location= useLocation()

   const [search, setsearch]=useState("")

  const handleInputChange = (e) => {
    const newSearchTerm = e.target.value;
    onSearch(newSearchTerm)

    setsearch(newSearchTerm)
    
  };

  const handlequery=()=>{

     console.log("dfgh", search)

    fetchSearchResults(search,dispatch)

  }


  const dispatch=useDispatch()

  const reduxdata = useSelector((state)=>state.search.searchResults)
   console.log(reduxdata)




     
  return (

    <div className="navbar">
    
          {
           location.pathname === '/' ? (
            <>   
            <div className="searchbar">
            <AiOutlineSearch className="icon" onClick={handlequery} />
            <input type="search" placeholder="search" onChange={handleInputChange}  />
            </div>
            </>           

           ):(
               <div className="navtitle">
             
                <h2>Movie Details</h2>
           
               </div>
             )       
        }
      

      <div className="homeicon">
        <Link to="/" style={{textDecoration:'none', color:"inherit"}}>
          <AiFillHome className="icon" />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
