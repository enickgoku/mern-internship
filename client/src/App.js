import React, { useState, useEffect, useMemo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./scenes/Layout";
import Dashboard from "./scenes/Dashboard";

const { REACT_APP_API_URL } = process.env;

const App = () => {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      const response = await fetch(`${REACT_APP_API_URL}`);
      const data = await response.json();
      setProperties(data);
    };
    fetchProperties();
  }, []);

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </div>
  );
};

export default App;
