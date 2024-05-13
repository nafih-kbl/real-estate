import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import About from './pages/About'
import Profile from './pages/Profile'
import Header from './components/Header'

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Sign-In' element={<SignIn/>}></Route>
      <Route path='/Sign-up' element={<SignUp/>}></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path='/Profile' element={<Profile/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}
