import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import LeftNavigation from '../leftNavigation/LeftNavigation';
import RightNavigation from '../rightNavigation/RightNavigation';
import SlotCard from '../slotcard/SlotCard';
import bookingcarousel from './BookingCarousel.module.css'

const BookingCarousel = ({dates}) =>
{
    return(
        <div className={bookingcarousel.container}>
            <Swiper
                modules={{Navigation}}
                initialSlide={0}
                slidesPerView={3}
                spaceBetween={30}>
                <LeftNavigation />
                <RightNavigation />
                {dates?.map((data)=>
                (
                    <SwiperSlide key={data.id}>
                        <SlotCard data={data}/>
                    </SwiperSlide>
                ))}  
            </Swiper>
        </div>
    )
}

export default BookingCarousel;
