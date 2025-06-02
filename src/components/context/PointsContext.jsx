import { createContext, useState } from "react";

export const PointsContext = createContext();

const PointsContextProvider = ({ children }) => {
    const [counterConsecutiveWins,setCounterConsecutiveWins] = useState(1)
    const [points, setPoints] = useState(0)

    const sumarPuntos = () => {
        setPoints(points + (10 * counterConsecutiveWins));
        return;

    }
    

    const sumarCounter = () => {
        setCounterConsecutiveWins(counterConsecutiveWins+1)
        console.log("sumado:" ,counterConsecutiveWins);
       
        
    }
    const reiniciarCounter = () => {
        setCounterConsecutiveWins(1)
        console.log("reiniciado");
        
    }

    const reiniciarPoints = ()=>{
        setPoints(0)
    }


    return <PointsContext.Provider value={{ points, sumarPuntos, counterConsecutiveWins, sumarCounter,reiniciarCounter,reiniciarPoints }}>
        {children}
    </PointsContext.Provider>

}


export default PointsContextProvider;