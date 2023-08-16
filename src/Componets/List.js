import React, { useEffect, useState } from "react";
import "../Style/List.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


function List({data, setData}) {
  const movieimgpath = "https://image.tmdb.org/t/p/original";
  const reduxdata = useSelector((state)=>state.search.searchResults)
   ///this give the data by using redux 



  return (
    <>
      <div className="lists">
    
        {data.map((dt) => {
          return (      
         
            <Link className="link" key={dt.id} to={`/detail/${dt.id}`}>       
            
              <div className="card">
                <div className="cardimg">
                  <img src={`${movieimgpath}${dt.backdrop_path}`} />
                </div>
               
                <div className="cardinfo">
                  <div className="movie">
                    <div className="name">{dt.title.substring(0, 10)}</div>
                  </div>
                  <div className="rating">{dt.vote_average}</div>
                </div>

                <div className="desc">{dt.overview.substring(0, 20)}</div>
                
              </div>
            </Link>


          );
        })}
      </div>
    </>
  );
}

export default List;
