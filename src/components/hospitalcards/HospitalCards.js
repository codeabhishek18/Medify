import HospitalCardsStyles from './HospitalCards.module.css'
import SlotBooking from '../slotbooking/SlotBooking'
import HospitalDetail from '../hospitaldetail/HospitalDetail'

const HospitalCards = ({data, setCurrent, current, index}) =>
{

    return(
        <div className={HospitalCardsStyles.main}>
            <HospitalDetail 
                data={data} 
                index={index}
                current={current}
                setCurrent={setCurrent}
            />
            {current === index && 
            <SlotBooking 
                data={data} 
                current={current}
                bookingIndex={index}
            />}
        </div>
    )
}

export default HospitalCards