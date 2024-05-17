import { useState } from 'react'
import slotcard from './SlotCard.module.css'

const SlotCard = ({data}) =>
{

    const [booking, setBooking] = useState();

    console.log(booking);

    console.log()

    return(
        <div className={slotcard.container} onClick={()=>{setBooking({date: data.date})}}> 
            <p>{data.date}</p>
            <span>{data.slots}</span>
            <p></p>
        </div>
    )
}

export default SlotCard;