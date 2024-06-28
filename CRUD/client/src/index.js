import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import PageNotFound from './components/PageNotFound';
import PersonDetails from './components/PersonDetails';
import UpdatePerson from './components/UpdatePerson';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/ajoutPersonne',
    element: <h1>waw</h1>
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


