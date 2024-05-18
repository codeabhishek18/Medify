import { useEffect, useState } from "react";
import HospitalDetail from "../../components/hospitaldetail/HospitalDetail";
import mybookings from './MyBookings.module.css'
import Searchbar from "../../components/searchbar/Searchbar";

const MyBookings = () =>
{
    const [myBookings, setMyBookings] = useState([])

    useEffect(()=>
    {
        setMyBookings(JSON.parse(localStorage.getItem('MyBookings')));
    },[])

    return(
        <div className={mybookings.container}>
            {myBookings.map((data) =>
            (
                <HospitalDetail data={data} type="bookings"/>
            ))}
        </div>
    )
}

export default MyBookings;