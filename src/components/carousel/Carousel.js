import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore from 'swiper'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import styles from './Carousel.module.css'

SwiperCore.use([Pagination])

const Carousel = ({data}) =>
{
    return(
        <div className={styles.carousel}>
            <Swiper
                slidesPerView={3}
                pagination={{ clickable: true }}>
                {data?.map((card)=>
                (
                    <SwiperSlide key={card.id}><img className={styles.slide} src={card.image} alt="slide"/></SwiperSlide>
                ))}  
            </Swiper>
        </div>
    )
}

export default Carousel;