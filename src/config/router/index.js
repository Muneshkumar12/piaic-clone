import React from 'react';
import { Home, HowItWork,  InternetOfThing, CloudNative, BlockChain, Ai, About } from '../../pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/howitworks' element={<HowItWork />} />
        <Route path='/howitworks' element={<HowItWork />} />
        <Route path='/artificial-intelligence' element={<Ai/>} />
        <Route path='/cloud-native' element={<CloudNative/>} />
        <Route path='/block-chain' element={<BlockChain/>} />
        <Route path='/iot' element={<InternetOfThing/>} />
        <Route path='/iot' element={<InternetOfThing/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;
