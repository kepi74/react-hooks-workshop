import React, { useState, useEffect } from "react";

const useFetch = url => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const response = await fetch(url);
    const data = await response.json();
    const [item] = data.results;
    setData(item);
    setLoading(false);
  }, []);

  return { data, loading };
};

export default () => {
  const { data, loading } = useFetch("https://api.randomuser.me/");

  return (
    <div>
      <h3>Data fetch:</h3>
      <ul>
        {loading ? <div>...loading</div> : <div>First Name: {data.name.first} <br /> Last Name: {data.name.last}</div>}
      </ul>
    </div>
  );
};
