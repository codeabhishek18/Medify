import medcentre from '../../assets/medcentre.png'
import HospitalCardsStyles from './HospitalCards.module.css'
import like from '../../assets/like.png'
import { useState } from 'react'
import SlotBooking from '../slotbooking/SlotBooking'

const HospitalCards = ({data, index}) =>
{
    const [current, setCurrent] = useState(-1);

    return(
        <div className={HospitalCardsStyles.main}>
            <div className={HospitalCardsStyles.container}>
                <img src={medcentre} alt="hospital"/>
                <div className={HospitalCardsStyles.content}>
                    <h4>{data["Hospital Name"]}</h4>
                    <h6>{data.City}, {data.State}</h6>
                    <p>Smilessence Center for Advanced Dentistry + 1</p>
                    <div className={HospitalCardsStyles.contentBottom}>
                        <span>FREE</span>
                        <p>500</p>
                        <p>Consultation fee at clinic</p>
                    </div>
                    <img src={like} alt="like"/>
                </div>
                <div className={HospitalCardsStyles.footer}>
                    <span>Available Today</span>
                    <button onClick={()=> setCurrent(index)}>Book FREE Center Visit</button>
                </div>
            </div>
            {current === index && <SlotBooking/>}
        </div>
    )
}

export default HospitalCards