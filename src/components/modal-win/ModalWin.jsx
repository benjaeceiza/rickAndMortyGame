
import "./ModalWin.css"
import ReplayIcon from '@mui/icons-material/Replay';

 const ModalWin = ({setIsReplay,setIsWined}) => {

    const send = () => {
      setIsReplay(true)
      setIsWined(false)
    }
     
    return (
        <>
         <div className="modal-win-container">
             <div className="modal-win">
                 <h1 className="modal-win-title">You win</h1>
                 <div className="modal-win-replay-button" onClick={() =>  send()}>
                 <ReplayIcon className='icon-modal-win-button' sx={{ fontSize: 50, color: "#d0dc4d" }} />
                 </div>
                 <img className="modal-win-img" src="https://i.postimg.cc/htXsSh9b/Mas-de-10-a-os-de-trayectoria-10.png" alt="" />
             </div>
         </div>
        </>
    )
 }

 export default ModalWin;