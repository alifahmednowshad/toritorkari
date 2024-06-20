import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './routes/routes';
import { RouterProvider } from 'react-router-dom';
import AuthProvider from './AuthProvider/AuthProvier';
import { Toaster } from 'react-hot-toast';
import "react-toastify/dist/ReactToastify.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster />
    </AuthProvider>
  </React.StrictMode>
);
