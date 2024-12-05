import {Routes, Route} from 'react-router-dom'
import Home from './Components/Home';
import Header from './Components/Header';
import Features from './Components/Features';
import Enterprise from './Components/Enterprise';
import Support from './Components/Support';
import Footer from './Components/Footer';
import Cool from './Components/Cool';
import Random from './Components/Random';
import Team from './Components/Team';
import Resource from './Components/Resource';
import ResourceNames from './Components/ResourceNames';
import AboutTeam from './Components/AboutTeam';
import Location from './Components/Location';

function App() {
  
  return (
    <>

    <Header/>
    <Routes>

      <Route path='/' element={<Home/>}></Route>
      <Route path='features' element={<Features/>}></Route>
      <Route path='enterprise' element={<Enterprise/>}></Route>
      <Route path='support' element={<Support/>}></Route>
      <Route path='cool' element={<Cool/>}></Route>
      <Route path='random' element={<Random/>}></Route>
      <Route path='team' element={<Team/>}></Route>
      <Route path='resource' element={<Resource/>}></Route>
      <Route path='resource-names' element={<ResourceNames/>}></Route>
      <Route path='aboutteam' element={<AboutTeam/>}></Route>
      <Route path='locations' element={<Location/>}></Route>

    </Routes>

     <Footer/>
    </>
  )
}

export default App
