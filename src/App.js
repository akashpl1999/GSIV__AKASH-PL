import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Navbar from "./Componets/Navbar";
import List from "./Componets/List";
import Details from "./Componets/Details";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  const [data, setData] = useState([]);

  const [filteredData, setFilteredData] = useState([]);

  const [lastDisplayedIndex, setLastDisplayedIndex] = useState(0);

  
  const reduxdata = useSelector((state)=>state.search.searchResults)


   //https://api.themoviedb.org/3/search/movie?api_key=be9f1e34a14505447f4f2eb90205ecb8&language=en-US

  const fetchmovies = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(
        "https://api.themoviedb.org/3/discover/movie?api_key=be9f1e34a14505447f4f2eb90205ecb8&langavage=en-US"
      );
      console.log(res.data.results);

      setData(res.data.results);

      setFilteredData(res.data.results);
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    fetchmovies();
  }, []);

  const handleSearch = (searchQuery) => {
    const filtered = data.filter((dt) =>
      dt.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 &&
      !isLoading
    ) {
      const newDataChunk = data.slice(
        lastDisplayedIndex,
        lastDisplayedIndex + 5
      );
      setLastDisplayedIndex(lastDisplayedIndex + 5);
      setFilteredData((prvs) => [...prvs, ...newDataChunk]);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isLoading]);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar onSearch={handleSearch} />
        <Routes>
          <Route  path="/"  element={<List data={filteredData} setData={setData} />}></Route>
          <Route path="detail/:id" element={<Details />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
