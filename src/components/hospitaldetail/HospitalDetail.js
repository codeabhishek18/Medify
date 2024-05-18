import medcentre from '../../assets/medcentre.png'
import hospitaldetail from './HospitalDetail.module.css'
import like from '../../assets/like.png'
import { enqueueSnackbar } from 'notistack'

const bookingId = () =>
{
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    let result ='';
    for(let i=0;i<6;i++)
    {
        result += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return result;
}

const HospitalDetail = ({data, index, setCurrent, type}) =>
{

    const handleClick = () =>
    {
        setCurrent(index);
        localStorage.setItem('Hospital', JSON.stringify({id : index, name : data["Hospital Name"], location : `${data.City}, ${data.State}` }))
        const bookingdate = JSON.parse(localStorage.getItem('Date'))
        const bookingtime = JSON.parse(localStorage.getItem('Time'))
        const bookinghospital = JSON.parse(localStorage.getItem('Hospital'));

        const bookings = JSON.parse(localStorage.getItem('MyBookings'));
        console.log(bookings);

        if(bookinghospital.id !== bookingdate.id)
            return enqueueSnackbar('Pick a date', {variant: 'warning'});

        if(bookinghospital.id !== bookingtime.id)
            return enqueueSnackbar('Pick your slot', {variant: 'warning'});

        const newbooking = {id: bookingId(), name: bookinghospital.name, location: bookinghospital.location, date: bookingdate.date, time: bookingtime.time}
        const mybookings = bookings === null ? [newbooking] : [...bookings,newbooking];
        localStorage.setItem('MyBookings', JSON.stringify(mybookings));
        enqueueSnackbar('Booking confirmed', { variant : 'success'})
    }

    return(
        <div className={hospitaldetail.container} >

            <img src={medcentre} alt="hospital"/>
            
            <div className={hospitaldetail.content}>
                <h4>{type === 'bookings' ? data.name : data["Hospital Name"]}</h4>
                <h6>{type === 'bookings' ? data.location : `${data.City}, ${data.State}`}</h6>
                <p>Smilessence Center for Advanced Dentistry + 1</p>
                {type !== 'bookings' &&
                <div className={hospitaldetail.contentBottom}>
                    <span>FREE</span>
                    <p className={hospitaldetail.fee}>₹500</p>
                    <p>Consultation fee at clinic</p>
                </div>}
                <img src={like} alt="like"/>
            </div>
            
            {type === 'bookings' ?
            <div className={hospitaldetail.footerslots}>
                <span>{data.time}</span>
                <span>{data.date}</span>
            </div>

            :

            <div className={hospitaldetail.footer}>
                <span>Available Today</span>
                <button onClick={()=> handleClick()}>Book FREE Center Visit</button>
            </div>
}
        </div>
    )
}

export default HospitalDetail