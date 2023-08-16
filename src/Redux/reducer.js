// reducers.js



const initialState = {

    searchResults: [],

  };
  
  const searchReducer = (state = initialState, action) => {
      console.log(action.payload, "action")
   
    switch (action.type) {

        case 'SET_SEARCH_RESULTS':
        return {
          ...state,
          searchResults: action.payload,
        };

      default:
        return state;
    }
  };
  
  export default searchReducer;
  