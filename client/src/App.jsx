import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Homepage.jsx'
import Header from './Pages/Components/Header.jsx'
import Wallpaper from './Pages/Wallpaper.jsx'

function App() {
  return (
    <BrowserRouter>
        <Header />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/wallpaper/:wallpaperId' element={<Wallpaper />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
