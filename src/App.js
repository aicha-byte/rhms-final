
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './component/Login'
 import Home from './component/Home'
import ProfilePages from './Pages/ProfilePages'
import HolidaysPages from './Pages/HolidaysPages'
import AutorisationPage from './Pages/AutorisationPages'
import MesDemandesPage from './Pages/MesDemandesPages'
import UpdateUser from './component/UpdateUser'
import DemandeItem from './component/DemandeItem'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  

  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/ProfilUser/:id' element={<Home/>}></Route>
        <Route path='/ProfilUser/:id' element={<ProfilePages/>}></Route>
        <Route path='/congé/:id' element={<HolidaysPages/>}></Route>
        <Route path='/sortie' element={<AutorisationPage/>}></Route>
        <Route path='/demandes/:id' element={<MesDemandesPage/>}></Route>
        <Route path='/UpdateUser/:id' element={<UpdateUser/>}></Route>
        <Route path='/mesDemandes/' element={<DemandeItem/>}></Route>




      </Routes>
      </BrowserRouter> 


      
    </div>
  )
}

export default App
