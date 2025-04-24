import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Homepage.jsx'
import Signup from './pages/Signup.jsx'
import Signin from './pages/Signin.jsx'
import Submit from './pages/Submit.jsx'
import Profile from './pages/Profile.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/submit' element={<Submit />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
