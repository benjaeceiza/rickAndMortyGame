import "./card.css"


const Card = ({item}) => {
    return (
        <>
            <div key={item.id} className={"card-container card"} style={{ backgroundImage: `url(${item.image})` }}>
               
            </div>
        </>
    )
}

export default Card;