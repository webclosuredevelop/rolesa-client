// import { useState } from 'react'
// import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import AuthProvider from "./provider/authProvider";
import Routes from "./router";
// import Login from './components/Login/Login'
// import Dashboard from './components/Dashboard/Dashboard'
// import Profile from './components/Profile/Profile'
// import Register from './components/Register/Register'

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App
