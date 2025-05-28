
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import ReplayIcon from '@mui/icons-material/Replay';
import "./menu.css"

const Menu = ({setIsPaused,setIsReplay}) => {
  return (
    <>
   
      <div className='menu-container'>
        <div className='menu'>
          <p className='menu-title'>GAME PAUSED</p>
          <div className='menu-button-container'>
            <div className='menu-button' onClick={() => setIsPaused(false)}>
              <PlayCircleOutlineIcon className='icon-menu-button' sx={{ fontSize: 50, color: "#d0dc4d" }}/>
            </div>
            <div className='menu-button' onClick={() => setIsReplay(true)}>
              <ReplayIcon className='icon-menu-button' sx={{ fontSize: 50, color: "#d0dc4d" }} />
            </div>
          </div>
          <img className='menu-img' src="https://i.postimg.cc/TPw7M0Rt/Mas-de-10-a-os-de-trayectoria-9.png" alt="" />
        </div>
      </div>
    </>
  )
}

export default Menu;