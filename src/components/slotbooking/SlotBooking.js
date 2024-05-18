import { MorningSlot, AfternoonSlot, EveningSlot, dates } from '../../data/SlotData'
import BookingCarousel from '../bookingcarousel/BookingCarousel';
import HospitalCardsStyles from '../hospitalcards/HospitalCards.module.css'

const SlotBooking = ({data, bookingIndex}) =>
{

    const handleClick = (slotTime) =>
    {
        localStorage.setItem('Time', JSON.stringify({id: bookingIndex, time: slotTime}))
    }

    return(
       <div className={HospitalCardsStyles.slotbooking}>
            <BookingCarousel data={data} dates={dates} bookingIndex={bookingIndex}/>
            <div className={HospitalCardsStyles.slotContent}>
                <div className={HospitalCardsStyles.slots}>
                    <span>Morning</span>
                    <span className={HospitalCardsStyles.time} onClick={()=> handleClick(MorningSlot.time)}>{MorningSlot.time}</span>
                </div>
                <p></p>
                <div className={HospitalCardsStyles.slots}>
                    <span>Afternoon</span>
                    {AfternoonSlot.map((slot)=>
                    (
                        <span className={HospitalCardsStyles.time} onClick={()=>handleClick(slot.time)}>{slot.time}</span>
                    ))}
                </div>
                <p></p>
                <div className={HospitalCardsStyles.slots}>
                    <span>Evening</span>
                    {EveningSlot.map((slot)=>
                    (
                        <span className={HospitalCardsStyles.time} onClick={()=>handleClick(slot.time)}>{slot.time}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SlotBooking;