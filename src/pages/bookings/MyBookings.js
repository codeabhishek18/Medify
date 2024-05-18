import { useEffect, useState } from "react";
import HospitalDetail from "../../components/hospitaldetail/HospitalDetail";
import mybookings from './MyBookings.module.css'
import Searchbar from "../../components/searchbar/Searchbar";
import Ad from "../../components/ad/Ad";

const MyBookings = () =>
{
    const [myBookings, setMyBookings] = useState([])

    useEffect(()=>
    {
        setMyBookings(JSON.parse(localStorage.getItem('MyBookings')));
    },[])

    return(
        <div className={mybookings.container}>
            <Searchbar type="bookings"/>
            <div className={mybookings.wrapper}> 
                <div>
                {myBookings.map((data) =>
                (
                    <HospitalDetail data={data} type="bookings"/>
                ))}
                </div>
                <Ad/>
            </div>
        </div>
    )
}

export default MyBookings;