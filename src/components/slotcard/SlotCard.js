import './SlotCard.css'

export const dateFormat = (inputDate, num) =>
{
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const dd = Number(inputDate.slice(0,2)) + num;
    const mm = inputDate.slice(3,5);
    const yyyy = inputDate.substr(6,10);
    const month = months[Number(mm) - 1];
    return month +' ' +dd +', ' +yyyy;
}

const SlotCard = ({data, active, setActive, bookingIndex}) =>
{
    const handleClick = () =>
    {
        const today = new Date();
        setActive(data.id)
        if(data.date === 'Today')
        {
            return localStorage.setItem('Date', JSON.stringify({id:bookingIndex, date: dateFormat(today.toLocaleDateString(), 0)}))
        }

        if(data.date === 'Tomorrow')
        {
            return localStorage.setItem('Date', JSON.stringify({id:bookingIndex, date: dateFormat(today.toLocaleDateString(), 1)}))
        }
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
