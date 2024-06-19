import { MorningSlot, AfternoonSlot, EveningSlot, dates } from '../../data/SlotData'
import BookingCarousel from '../bookingcarousel/BookingCarousel';
import slotbookings from './SlotBooking.module.css'
import Slots from '../slots/Slots';
import { useState } from 'react';

const SlotBooking = ({data,current, bookingIndex}) =>
{
    const [selectedSlot, setSelectedSlot]  = useState({type: '', index: -1});

    const handleClick = (slotTime) =>
    {
        localStorage.setItem('Time', JSON.stringify({id: bookingIndex, time: slotTime}))
    }

    return(
       <div className={slotbookings.slotbooking}>
            {current === bookingIndex && 
            <div className={slotbookings.activehospital}>
                <span className={slotbookings.activespan}></span>
            </div>}
            <BookingCarousel data={data} dates={dates} bookingIndex={bookingIndex}/>
            <div className={slotbookings.slotContent}>
                <Slots slotdata={MorningSlot} handleClick={handleClick} type="Morning" selectedSlot={selectedSlot} setSelectedSlot={setSelectedSlot}/>
                <Slots slotdata={AfternoonSlot} handleClick={handleClick} type="Afternoon" selectedSlot={selectedSlot} setSelectedSlot={setSelectedSlot}/>
                <Slots slotdata={EveningSlot} handleClick={handleClick} type="Evening" selectedSlot={selectedSlot} setSelectedSlot={setSelectedSlot}/>
            </div>
        </div>
    )
}

export default SlotBooking;