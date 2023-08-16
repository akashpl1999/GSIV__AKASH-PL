// actions.js
import axios from 'axios';

export const setSearchResults = (results) => ({

     type: 'SET_SEARCH_RESULTS',

     payload: results,

});




export const fetchSearchResults = async (searchQuery,dispatch) => {
 

    try {

      const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=be9f1e34a14505447f4f2eb90205ecb8&language=en-US&query=${searchQuery}`);
      console.log(response)
      const searchResults = response.data.results;
       console.log(searchResults, "bhnjm")

      dispatch(setSearchResults(searchResults));



    } catch (error) {


      console.log(error);


    }
  };

