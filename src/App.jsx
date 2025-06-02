
import { useContext, useState } from 'react';
import './App.css'
import Game from './components/game/Game.jsx';
import InitGame from './components/initGame/InitGame.jsx';
import Menu from './components/menu/Menu.jsx';
import MenuButton from './components/menu/MenuButton.jsx';
import Points from './components/points/Points.jsx';
import PointsContextProvider from './components/context/PointsContext.jsx';

function App() {

  const [isInitGame, setIsInitGame] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [isReplay, setIsReplay] = useState(false)
  const [counterConsecutiveWins, setCounterConsecutiveWins] = useState(0)

  return (
    <>
      <PointsContextProvider>
        <div className='container'>

          {isPaused
            ?
            <Menu setIsPaused={setIsPaused} setIsReplay={setIsReplay} />
            :
            ""
          }

          <Points setIsPaused={setIsPaused} />
          <Game
            isReplay={isReplay} setIsReplay={setIsReplay} setIsPaused={setIsPaused}>
          </Game>
        </div>
      </PointsContextProvider>
    </>
  )
}

export default App
