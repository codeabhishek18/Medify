import './SlotCard.css'

export const dateFormat = (inputDate, num) =>
{
    const months = [
        {month: 'January', days:31},
        {month: 'February', days:28}, 
        {month: 'March', days:31},
        {month: 'April', days:30},
        {month: 'May', days:31},
        {month: 'June', days:30},
        {month: 'July', days:31},
        {month: 'August', days:31},
        {month: 'September', days:30},
        {month: 'October', days:30},
        {month: 'November', days:31},
        {month: 'August', days:31},
        {month: 'December', days:30}]

    let dd = Number(inputDate.slice(0,2)) +num;
    const mm = inputDate.slice(3,5);
    const yyyy = inputDate.substr(6,10);
    const monthObject = months[Number(mm) - 1];
    let month = monthObject.month
    if(dd>monthObject.days)
    {
        month = months[Number(mm)].month;
        dd = 1;
    }
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
