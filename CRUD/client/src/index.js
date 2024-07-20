import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import PageNotFound from './components/PageNotFound';
import PersonDetails from './components/PersonDetails';
import UpdatePerson from './components/UpdatePerson';
import AjoutPersonne from './components/AjoutPersonne';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import ProtctRouter from './components/ProtctRouter';

const token = localStorage.getItem('token')

const router = createBrowserRouter([
  {
    path: '/',
    element: <ProtctRouter isAuth={token}><App/></ProtctRouter>
  },
  {
    path: '/connexion',
    element: <SignIn/>
  },
  {
    path: '/inscription',
    element: <SignUp/>
  },
  {
    path: '/ajoutPersonne',
    element: <ProtctRouter isAuth={token}><AjoutPersonne/></ProtctRouter>
  },
  {
    path: 'détails/:id',
    element: <ProtctRouter isAuth={token}><PersonDetails/></ProtctRouter>
  },
  {
    path: 'modifier/:id',
    element: <ProtctRouter isAuth={token}><UpdatePerson/></ProtctRouter>
  },
  {
    path: '*',
    element: <PageNotFound/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);


