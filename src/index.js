import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ClassComponentTutorials from './compontests/ClassComponentsTutorials'
import reportWebVitals from './reportWebVitals';
import FunctionComponentsTutorials from './compontests/FunctionComponentsTutorials';
import RouterBlog from './RouterBlog';

//Router 
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <RouterBlog/>
    </BrowserRouter>
    {/* <FunctionComponentsTutorials/> */}
    {/* <ClassComponentTutorials/> */}
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
