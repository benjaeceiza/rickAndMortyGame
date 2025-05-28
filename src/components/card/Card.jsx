import "./card.css"


const Card = ({item}) => {
    return (
        <>
            <div key={item.id} className="card-container card" style={{ backgroundImage: `url(${item.image})` }}>
                <p className="name">{item.name}</p>
            </div>
        </>
    )
}

export default Card;