import React, { useState, useEffect } from "react";

// make sure to use https
const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

const useFecth = (urlParams) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ show: false, message: "" });
  const [data, setData] = useState([]);

  const fetchMovies = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.Response === "True") {
        setData(data.Search || data);
        setError({ show: false, message: "" });
      } else {
        setError({ show: true, message: data.Error });
      }

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovies(`${API_ENDPOINT}${urlParams}`);
  }, [urlParams]);

  return { loading, error, data };
};

export default useFecth;
