import React, { useState, useEffect } from "react";

import NavigationBar from "./components/NavigationBar";

const { REACT_APP_API_URL } = process.env;

const App = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      const response = await fetch(`${REACT_APP_API_URL}`);
      const data = await response.json();
      setProperties(data);
    };
    fetchProperties();
  }, []);

  console.log(properties);

  return (
    <div className="app">
      <NavigationBar />
    </div>
  );
};

export default App;
