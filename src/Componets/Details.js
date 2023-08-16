import React, { useEffect, useState } from "react";
import "../Style/Details.css";
import { useParams } from "react-router-dom";
import axios from "axios";

function Details() {

     const {id}= useParams()
       console.log(id)

        const [data,setdata]=useState()


       useEffect(() => {
        axios
          .get(
            `https://api.themoviedb.org/3/movie/${id}}?api_key=be9f1e34a14505447f4f2eb90205ecb8&language=en-US`
          )
          .then((res) => {
            console.log(res.data);
            setdata(res.data)
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);
    
      const movieimgpath='https://image.tmdb.org/t/p/original'


      return (
    <>
      <div className="detailsCard">
        <div className="detailsCardImg">
    

             <img src={`${movieimgpath}/${data?.backdrop_path}`} alt="image"/>

           </div>

        <div className="detailsCardinfo">

          <div className="title">{data?.title} ({data?.vote_average.toFixed(1)})</div>

          <div className="dir">Year | Length | Director</div>

          <div className="cast"> actor 1 actor 2</div>

          <div className="description">Description: {data?.overview}
           </div>
        </div>
      </div>
    </>
  );
}

export default Details;
