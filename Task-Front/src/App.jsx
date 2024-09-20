import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserSignup from './Component/UserSignup'
import UserLogin from './Component/UserLogin';
import  UserHome  from './Component/UserHome';
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserLogin />} />
          <Route path="/UserSignup" element={<UserSignup />} />
          <Route path="/UserHome" element={<UserHome />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

