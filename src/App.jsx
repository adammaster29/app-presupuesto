import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import '../ModoOscuro.css'
import Home from './components/Home'
import '../Responsive.css'
import { useState } from 'react'

function App() {
  const [tabladosificadora, setTabladosificadora] = useState(true)
  const [modaluso, setModaluso] = useState(false)
  const [modeDark, setModeDark] = useState(false)
  const dark = () => {
    setModeDark(!modeDark);
  }
  const tableUso = () => {
    setModaluso(true);
  }
  const openTable = () => {
    setTabladosificadora(true);
  }
  return (
    <div className={`${modeDark ? 'dark' : 'App'}`}>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home modaluso={modaluso}
            tableUso={tableUso} dark={dark} modeDark={modeDark} setModaluso={setModaluso} setTabladosificadora={setTabladosificadora} openTable={openTable} tabladosificadora={tabladosificadora} />} />
         
        </Routes>
      </HashRouter>

    </div>
  )
}

export default App
