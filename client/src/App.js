import React, { useState, useEffect, useMemo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { useGetUserQuery, useGetPropertiesQuery } from "./state/api";

import Layout from "./scenes/Layout";
import PropertyList from "./scenes/Properties";
import Property from "./scenes/Property";
import Underdevelopment from "./scenes/Underdevelopment";

const { REACT_APP_API_URL } = process.env;

// User is grabbed using redux and redux toolkit to showcase the use of redux toolkit
// and the use of the useGetUserQuery hook to showcase the use of the RTK Query

const App = () => {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const [properties, setProperties] = useState([]);
  const [user, setUser] = useState([]);
  const [clients, setClients] = useState([]);
  const userId = useSelector((state) => state.global.userId);
  const { data: userData } = useGetUserQuery(userId);

  const fetchClients = async () => {
    const response = await fetch(`${REACT_APP_API_URL}/clients`);
    const data = await response.json();
    setClients(data);
  };

  const fetchProperties = async () => {
    const response = await fetch(`${REACT_APP_API_URL}/properties`);
    const data = await response.json();
    // add photos to each property from the backend assests folder
    const propertiesWithPhotos = data.map((property) => {
      const photos = property.photos.map((filename) => {
        return `${REACT_APP_API_URL}/db/seeders/assets/${filename}`;
      });
      return { ...property, photos };
    });
    setProperties(propertiesWithPhotos);
  };

  useEffect(() => {
    const abortController = new AbortController();
    setUser(userData);
    fetchClients();
    fetchProperties();
    return () => abortController.abort();
  }, [userData]);

  if (!userData) {
    return <p>Please Log In</p>; // make sign in component with a fetch for user data again.
  }
  if (!clients) {
    return <p>Loading...</p>;
  }
  if (!properties) {
    return <p>Loading...</p>;
  }

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route element={<Layout user={user || {}} />}>
            <Route
              path="/"
              element={<PropertyList properties={properties || []} />}
            />
            <Route
              path="/properties/:id"
              element={
                <Property
                  properties={properties || []}
                  clients={clients || []}
                />
              }
            />
          </Route>
          {/* All other paths will be redirected to the under development page. */}
          <Route path="*" element={<Underdevelopment />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
};

export default App;
