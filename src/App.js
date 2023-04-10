import React from 'react'
import './App.scss'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import { AppRoutes } from './constants/routes'

const App = () => {
  return (
    <>
      <HashRouter>
        <Route path={AppRoutes.Home} element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path={AppRoutes.About} element={<About />} />
          <Route path={AppRoutes.Contact} element={<Contact />} />
        </Route>
      </HashRouter>
    </>
  )
}

export default App
