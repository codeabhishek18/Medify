import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import LeftNavigation from '../navigation/LeftNavigation'
import RightNavigation from '../navigation/RightNavigation';
import SlotCard from '../slotcard/SlotCard';
import bookingcarousel from './BookingCarousel.module.css'
import { useState } from 'react';

const BookingCarousel = ({dates, bookingIndex}) =>
{

    const [active, setActive] = useState(0);

    return(
        <div className={bookingcarousel.container}>
            <Swiper
                modules={{Navigation}}
                initialSlide={0}
                slidesPerView={'auto'}
                spaceBetween={0}>
                <LeftNavigation />
                <RightNavigation />
                <div className={bookingcarousel.swiperdiv}>
                    {dates?.map((data)=>
                    (
                        <SwiperSlide key={data.id}>
                            <SlotCard 
                                data={data} 
                                active={active} 
                                setActive={setActive} 
                                bookingIndex={bookingIndex}
                            />
                        </SwiperSlide>
                    ))}
                </div>  
            </Swiper>
        </div>
    )
}

export default BookingCarousel;
