import { useState } from 'react';
import { MorningSlot, AfternoonSlot, EveningSlot, dates } from '../../data/SlotData'
import BookingCarousel from '../bookingcarousel/BookingCarousel';
import HospitalCardsStyles from '../hospitalcards/HospitalCards.module.css'

const SlotBooking = () =>
{

    const [bookingTime, setBookingTime] = useState();
    console.log(bookingTime)

    return(
       <div className={HospitalCardsStyles.slotbooking}>
            <BookingCarousel dates={dates}/>
            <div className={HospitalCardsStyles.slotContent}>
                <div className={HospitalCardsStyles.slots}>
                    <span>Morning</span>
                    <span className={HospitalCardsStyles.time} onClick={()=>setBookingTime(MorningSlot.time)}>{MorningSlot.time}</span>
                </div>
                <p></p>
                <div className={HospitalCardsStyles.slots}>
                    <span>Afternoon</span>
                    {AfternoonSlot.map((slot)=>
                    (
                        <span className={HospitalCardsStyles.time} onClick={()=>setBookingTime(AfternoonSlot.time)}>{slot.time}</span>
                    ))}
                </div>
                <p></p>
                <div className={HospitalCardsStyles.slots}>
                    <span>Evening</span>
                    {EveningSlot.map((slot)=>
                    (
                        <span className={HospitalCardsStyles.time} onClick={()=>setBookingTime(EveningSlot.time)}>{slot.time}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SlotBooking;