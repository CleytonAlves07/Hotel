'use client'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Contatos from './pages/contatos'
import Info from './pages/informacoes'
import Reservas from './pages/reservas'
import SobreNos from './pages/sobreNos'

export default function page() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/contato' element={<Contatos />}></Route>
          <Route path='/info' element={<Info/>}></Route>
          <Route path='/reservas' element={<Reservas />}></Route>
          <Route path='/sobrenos' element={<SobreNos/>}></Route>
      </Routes>
    
    </BrowserRouter>
  )
}
