import './SlotCard.css'

const SlotCard = ({data, active, setActive, bookingIndex}) =>
{
    const handleClick = () =>
    {
        setActive(data.id)
        localStorage.setItem('Date', JSON.stringify({id:bookingIndex, date: data.date}))
    }

       return(
        <div className="container">
            <div onClick={handleClick}> 
                <p>{data.date}</p>
                <span>{data.slots}</span>
            </div>
            <p className={active === data.id ? "underline active" : "underline"}></p>
        </div>
    )
}

export default SlotCard;
