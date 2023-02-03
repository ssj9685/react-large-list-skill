import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import {faker} from '@faker-js/faker';

const root = ReactDOM.createRoot(document.getElementById('root'));
const data = new Array(10000).fill().map((value, index) => ({ id: index, title: faker.lorem.words(5), body: faker.lorem.sentences(4) }))
root.render(
  <BrowserRouter>
    <App data={data}/>
  </BrowserRouter>
);

// If you want to start measuring performance in your App(props), pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
