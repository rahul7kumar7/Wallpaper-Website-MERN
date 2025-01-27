import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Homepage.jsx'
import Header from './pages/Components/Header.jsx'
import Signup from './pages/Signup.jsx'
import Signin from './pages/Signin.jsx'

function App() {
  return (
    <BrowserRouter>
        <Header />
      <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
