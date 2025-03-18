import React from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Layout from './layout'
import Homepage from './Component/Homepage/Homepage'
import Allcourse from './Component/Allcourse/Allcourse'





function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Homepage />}></Route>
          <Route path='allcourse' element={<Allcourse />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App