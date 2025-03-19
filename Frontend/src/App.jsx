import React from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Layout from './layout'
import Homepage from './Component/Homepage/Homepage'
import Allcourse from './Component/Allcourse/Allcourse'
import Buypage from './Component/Buypage/Buypage'
import Greet from './Component/GreetComponent/Greet'





function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Greet />}></Route>
        <Route path='/Learner' element={<Layout />}>
          <Route index element={<Homepage />}></Route>
          <Route path='allcourse' element={<Allcourse />}></Route>
          <Route path='buycourse' element={<Buypage/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App