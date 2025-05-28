
import { useState } from 'react';
import './App.css'
import Game from './components/game/Game.jsx';
import InitGame from './components/initGame/InitGame.jsx';
import Menu from './components/menu/Menu.jsx';
import MenuButton from './components/menu/MenuButton.jsx';
import Points from './components/points/Points.jsx';

function App() {

  const [isInitGame, setIsInitGame] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [isReplay, setIsReplay] = useState(false)
  const [points, setPoints] = useState(0)
  const [counterConsecutiveWins, setCounterConsecutiveWins] = useState(0)
  return (
    <>
      <div className='container'>

        {isPaused
          ?
          <Menu setIsPaused={setIsPaused} setIsReplay={setIsReplay} />
          :
          ""
        }

        <Points points={points} setPoints={setPoints} setIsPaused={setIsPaused} />
        <Game
          isReplay={isReplay} setIsReplay={setIsReplay} setIsPaused={setIsPaused}
          points={points} setPoints={setPoints} counterConsecutiveWins={counterConsecutiveWins}
          setCounterConsecutiveWins={setCounterConsecutiveWins}>
        </Game>

      </div>

    </>
  )
}

export default App
