import { MorningSlot, AfternoonSlot, EveningSlot, dates } from '../../data/SlotData'
import BookingCarousel from '../bookingcarousel/BookingCarousel';
import slotbookings from './SlotBooking.module.css'
import Slots from '../slots/Slots';
import { useState } from 'react';

const SlotBooking = ({data, bookingIndex}) =>
{
    const [selectedSlot, setSelectedSlot]  = useState({type: '', index: -1});

    const handleClick = (slotTime) =>
    {
        localStorage.setItem('Time', JSON.stringify({id: bookingIndex, time: slotTime}))
    }

    return(
       <div className={slotbookings.slotbooking}>
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