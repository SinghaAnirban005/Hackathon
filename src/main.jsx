import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import InputForm from './Components/InputForm.jsx'
import Attendance from './Components/Attendance.jsx'
import Card from './Components/Card.jsx'
import Layout from './Layout/Layout.jsx'
import Intro from './Intro/Intro.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route path=' '  element={<Intro />} />
      <Route path='/subjects'  element={<InputForm />} />
      <Route path='attendancechart' element={<Card />} />

      <Route path='stats' element={<Attendance />} />
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
