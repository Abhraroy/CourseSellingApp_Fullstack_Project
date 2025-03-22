import React from 'react'
import {HashRouter,BrowserRouter,Route,Routes} from "react-router-dom"
import Layout from './layout'
import Homepage from './Component/Homepage/Homepage'
import Allcourse from './Component/Allcourse/Allcourse'
import Buypage from './Component/Buypage/Buypage'
import Greet from './Component/GreetComponent/Greet'
import Signup from './Component/signup/signup'
import Login from './Component/Login/Login'
import Mycourse from './Component/Mycourse/Mycourse'





function App() {
  return (
    <>
    <HashRouter>
      <Routes>
        <Route path='/' element={<Greet />}></Route>
        <Route path='/learner/signup' element={<Signup />}></Route>
        <Route path='/learner/login' element={<Login />}></Route>
        <Route path='/learner' element={<Layout />}>
          <Route index element={<Homepage />}></Route>
          <Route path='allcourse' element={<Allcourse />}></Route>
          <Route path='buycourse' element={<Buypage/>}></Route>
          <Route path='mycourse' element={<Mycourse />}></Route>
        </Route>
      </Routes>
    </HashRouter>
    </>
  )
}

export default App