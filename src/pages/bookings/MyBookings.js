import { useEffect, useState } from "react";
import HospitalDetail from "../../components/hospitaldetail/HospitalDetail";
import bookingstyles from './MyBookings.module.css'
import Searchbar from "../../components/searchbar/Searchbar";
import Ad from "../../components/ad/Ad";

const MyBookings = () =>
{
    const [myBookings, setMyBookings] = useState([])
    const [searchHospital, setSearchHospital] = useState('');

    const filteredHospitalData = myBookings?.filter((bookings) => bookings.name.toLowerCase().includes(searchHospital.toLocaleLowerCase()));

    useEffect(()=>
    {
        setMyBookings(JSON.parse(localStorage.getItem('MyBookings')));
    },[])

    return(
        <div className={bookingstyles.container}>
            <Searchbar type="bookings" setSearchHospital={setSearchHospital}/>
            <div className={bookingstyles.wrapper}> 
                {myBookings ? 
                <div className={bookingstyles.bookings}>
                    {filteredHospitalData.map((data) =>
                    (
                        <HospitalDetail data={data} type="bookings"/>
                    ))}
                </div>
                :
                <h1 className={bookingstyles.bookings}>No Bookings</h1>}
                {myBookings && !filteredHospitalData.length && <h1>No Hospitals Found</h1>}
                <div className={bookingstyles.ad}>
                    <Ad/>
                </div>
            </div>
        </div>
    )
}

export default MyBookings;