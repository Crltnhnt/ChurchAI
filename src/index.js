import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import { Button } from '@mui/material'
import { Box } from '@mui/material'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import reportWebVitals from './reportWebVitals'
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
    <Box
  display="flex"
  justifyContent="center"
  alignItems="center"
  minHeight="100vh"> 
      <Button
      style={{
        borderRadius: 35,
        backgroundColor: "#21b6ae",
        padding: "18px 36px",
        fontSize: "18px"
  }}
  variant="contained"
    >Touch Me Baby</Button>
    </Box>

  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
