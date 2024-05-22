import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { CarouselData } from '../../data/CarouselData';
import slides from './OfferCarousel.module.css'

const OfferCarousel = () =>
{

    return(
        <div className={slides.container}>
            <Swiper
                modules={[Pagination]}
                initialSlide={0}
                slidesPerView={'auto'}
                spaceBetween={10}
                pagination={{ clickable: true }}>
                <div className={slides.carousel}>
                    {CarouselData?.map((data)=>
                    (
                        <SwiperSlide key={data.id}>
                            <img className={slides.slide} src={data.image} alt="slide"/>
                        </SwiperSlide>
                    ))}
                </div>  
            </Swiper>
        </div>
    )
}

export default OfferCarousel;
