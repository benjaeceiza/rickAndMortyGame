import MenuIcon from '@mui/icons-material/Menu';

const MenuButton = ({setIsPaused}) => {

    return(
        <>
          <div className="activate-menu-container" onClick={() => setIsPaused(true)}>
            <MenuIcon sx={{color: "#cfd453", fontSize:40}}/>
          </div>
        </>
    )
}

export default MenuButton;