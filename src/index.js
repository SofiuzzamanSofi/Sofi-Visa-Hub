import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { AuthProvider } from './AuthProvider/AuthProvider';
import './index.css';
import reportWebVitals from './reportWebVitals';
import router from './Router/Router/Router';
import { Toaster } from 'react-hot-toast';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}>
        <Toaster />
      </RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
reportWebVitals();