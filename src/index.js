import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Helmet } from "react-helmet";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
        <Helmet>
        <meta name="author" content="شرکت لوین | لوین تیم"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta name="robots" content="index, follow"></meta>
        <meta http-equiv="content-language" content="fa"></meta>
        <meta name="language" content="fa"></meta>
        <meta charset="utf-8"></meta>
        <meta name="theme-color" content="#000000" />
        </Helmet>
        <App />
</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
