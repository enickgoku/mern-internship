import React, { useState, useEffect, useMemo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import { useGetUserQuery } from "./state/api";

import Layout from "./scenes/Layout";
import Dashboard from "./scenes/Dashboard";

const { REACT_APP_API_URL } = process.env;

const App = () => {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const [properties, setProperties] = useState([]);
  const [user, setUser] = useState([]);
  const [clients, setClients] = useState([]);
  const userId = useSelector((state) => state.global.userId);
  const { data: userData } = useGetUserQuery(userId);

  useEffect(() => {
    const fetchClients = async () => {
      const response = await fetch(`${REACT_APP_API_URL}/clients`);
      const data = await response.json();
      setClients(data);
    };
    const fetchProperties = async () => {
      const response = await fetch(`${REACT_APP_API_URL}/properties`);
      const data = await response.json();
      setProperties(data);
    };
    setUser(userData);
    fetchClients();
    fetchProperties();
  }, [userData]);

  if (!userData) {
    return <p>Please Log In</p>; // make sign in component with a fetch for user data again.
  }

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route element={<Layout user={user || {}} />}>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </div>
  );
};

export default App;
