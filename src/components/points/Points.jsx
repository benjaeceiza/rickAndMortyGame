
import "./points.css"
import  MenuButton from "../menu/MenuButton"

const Points = ({points,setPoints,setIsPaused}) => {

    return (
        <>
            <div className="points-container">
                <div className="points-image-container">
                    <p className="points">{points}</p>
                </div>
                <MenuButton setIsPaused={setIsPaused}/>
            </div>
        </>
    )
}

export default Points;