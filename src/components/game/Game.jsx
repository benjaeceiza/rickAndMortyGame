
import { useState, useEffect } from "react";
import "./game.css"
import personajes1 from "../../data/personajes.json"
import personajes2 from "../../data/personajes2.json"
import Card from "../card/card";
import ModalWin from "../modal-win/ModalWin";




const Game = ({ isReplay, setIsReplay, setIsPaused, points, setPoints,counterConsecutiveWins,setCounterConsecutiveWins }) => {

  const [personajesEnd, SetPersonajesEnd] = useState([])
  const [firtsCardSelected, setFirtsCardSelected] = useState("")
  const [secondCardSelected, setSecondsCardSelected] = useState("")
  const [wins, setWins] = useState([])
  const [isWined, setIsWined] = useState(false)


  useEffect(() => {

    const personajesPrev = [...personajes1.slice(0, 9), ...personajes2.slice(0, 9)];
    SetPersonajesEnd([...personajesPrev].sort((a, b) => Math.floor(Math.random() * (1 - (-1) + 1) + (-1))))

  }, [])


  useEffect(() => {
    if (isReplay) {
      setFirtsCardSelected("")
      setSecondsCardSelected("")
      setWins([])
      setIsPaused(false)
      setIsReplay(false)
      setPoints(0)
    }
  }, [isReplay])



  const isWinner = (prevWins) => {
    if (prevWins.length == personajesEnd.length) {
      setIsWined(true)
    }
  }




  const onHandlerCardSelected = (id, name) => {
    if (firtsCardSelected && secondCardSelected) {
      return 0;
    }


    if (firtsCardSelected) {
      setSecondsCardSelected({ id: id, name: name })
      controlCard(id, name)
    } else {
      setFirtsCardSelected({ id: id, name: name })

    }

  }


  const controlCard = (id, name) => {


    if (firtsCardSelected.name === name) {
      counterConsecutiveWins++
      console.log("acertaste:", counterConsecutiveWins);

      const prevWins = [...wins, firtsCardSelected, { id: id, name: name }]
      setWins(prevWins)
      setFirtsCardSelected("")
      setSecondsCardSelected("")
      isWinner(prevWins)
      // setPoints(points += (10 * counterConsecutiveWins))

    } else {

      setTimeout(() => {
        setFirtsCardSelected("")
        setSecondsCardSelected("")

      }, 1000)
      
      console.log("fallaste:", counterConsecutiveWins)
    }
  }



  return (
    <>
      {
        isWined
          ?
          <ModalWin setIsReplay={setIsReplay} setIsWined={setIsWined} />
          :
          ""
      }
      <div className='game-container'>

        {personajesEnd.map(item => (

          firtsCardSelected.id == item.id || secondCardSelected.id == item.id
            ?
            <Card key={item.id} item={item} />
            :
            wins.some(win => win.name === item.name)
              ?
              <Card key={item.id} item={item} />
              :
              <div key={item.id} className="card-oculto card" onClick={() => onHandlerCardSelected(item.id, item.name)} ></div>
        ))}
      </div >
    </>
  )
}

export default Game;