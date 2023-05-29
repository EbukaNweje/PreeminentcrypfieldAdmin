import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AdminLogin from './Updateuser/AdminLogin';
import UpdateWallet from './Updateuser/Oldfile/Updateuser';

const App = () =>{
  return(
   <BrowserRouter>
    <Routes>
      <Route path='/updateuser' element={<UpdateWallet/>}/>
      <Route path='/' element={<AdminLogin/>}/>
    </Routes>
   </BrowserRouter>
  )
};

export default App;