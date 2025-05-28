import "./initGame.css"


const InitGame = ({setIsInitGame}) => {

    return (
        <>
            <div className='img-init-container' onClick={() => setIsInitGame(true)}>
                <img className='img-init-game' src="https://i.postimg.cc/1tYPMBqj/Mas-de-10-a-os-de-trayectoria-2.png" alt="" />
            </div>
        </>
    )

}


export default InitGame;