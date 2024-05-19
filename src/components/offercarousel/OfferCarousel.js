import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { CarouselData } from '../../data/CarouselData';
import slides from './OfferCarousel.module.css'

const OfferCarousel = () =>
{

    return(
        <div className={slides.container}>
            <Swiper
                modules={{Navigation}}
                initialSlide={0}
                slidesPerView={3}
                spaceBetween={30}>
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
