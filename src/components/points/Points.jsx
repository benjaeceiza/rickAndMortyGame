
import "./points.css"
import  MenuButton from "../menu/MenuButton"
import { useContext } from "react"
import { PointsContext } from "../context/PointsContext"

const Points = ({setIsPaused}) => {
  const {points} = useContext(PointsContext)
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