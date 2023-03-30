import { Route, Routes, BrowserRouter } from "react-router-dom";
import React from 'react'
import { SignUp, SignIn } from '../module/authentication/pages'


export const RouterApp: React.FC = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/cadastro' element={ <SignUp /> }/>
      </Routes>
    </BrowserRouter>
  )
}


