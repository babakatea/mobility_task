import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './settings/reportWebVitals';
import 'antd/dist/antd.css';
import {Index} from "./components";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);

reportWebVitals();
