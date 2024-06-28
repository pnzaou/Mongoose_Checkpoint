import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import PageNotFound from './components/PageNotFound';
import PersonDetails from './components/PersonDetails';
import UpdatePerson from './components/UpdatePerson';
import AjoutPersonne from './components/AjoutPersonne';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/ajoutPersonne',
    element: <AjoutPersonne/>
  },
  {
    path: 'détails/:id',
    element: <PersonDetails/>
  },
  {
    path: 'modifier/:id',
    element: <UpdatePerson/>
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


