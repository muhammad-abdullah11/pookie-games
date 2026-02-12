import './App.css'
import InfoBox from './Components/InfoBox'
import HomePage from './Components/Pages/HomePage'
import TicTacToe from './Components/Games/TicTacToe'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
function App() {

  return (
    <Router>

    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/games/tic-tac-toe' element={<TicTacToe/>}/>
    </Routes>
    </Router>
    
  )
}

export default App
