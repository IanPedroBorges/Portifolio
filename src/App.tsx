import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './layout'
import Home from './pages/Home'
import Hability from './pages/Hability'
import Projects from './pages/Projects'
import NotFound from './pages/NotFound'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={ <Layout /> }>
          <Route index element= { <Home /> } />
          <Route path='/Hability' element= { <Hability /> } />
          <Route path='/Projects' element= { <Projects /> } />
        </Route>
        <Route path='*' element={ <NotFound /> } />
      </Routes>
    </>
  )
}

export default App
