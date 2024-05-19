import docstyles from './DoctorsCarousel.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import DoctorsCard from '../doctorscard/DoctorsCard';
import { DoctorsData } from '../../data/DoctorsData';

const DoctorsCarousel = () =>
{
    return(
        <div className={docstyles.container}>
            <h1>Our Medical Specialist</h1>
            <div className={docstyles.wrapper}>
            <Swiper
                modules={{Navigation, Pagination}}
                initialSlide={0}
                slidesPerView={4}
                spaceBetween={30}
                pagination={{ clickable: true }}>
                <div className={docstyles.swiperdiv}>
                    {DoctorsData?.map((data)=>
                    (
                        <SwiperSlide key={data.id}>
                            <DoctorsCard key={data.id} data={data}/>
                        </SwiperSlide>
                    ))}
                </div>  
            </Swiper>
            </div>
        </div>
    )
}

export default DoctorsCarousel


