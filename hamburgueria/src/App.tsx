import { useState } from 'react'
import { Header } from './pages/header/indexHead'
import {Home} from './pages/home/indexHome'
import {Menu} from './pages/menu/indexMenu'

function App() {
  const [opcao, setOpcao] = useState(0)

  return (
    <div>
      <Header/>
      </div>
  )
}

export default App;
