import { useEffect, useState } from "react";
import HospitalDetail from "../../components/hospitaldetail/HospitalDetail";
import mybookings from './MyBookings.module.css'
import Searchbar from "../../components/searchbar/Searchbar";
import Ad from "../../components/ad/Ad";

const MyBookings = () =>
{
    const [myBookings, setMyBookings] = useState([])
    const [searchHospital, setSearchHospital] = useState('');

    const filteredHospitalData = myBookings.filter((bookings) => bookings.name.toLowerCase().includes(searchHospital.toLocaleLowerCase()));

    useEffect(()=>
    {
        setMyBookings(JSON.parse(localStorage.getItem('MyBookings')));
    },[])

    return(
        <div className={mybookings.container}>
            <Searchbar type="bookings" setSearchHospital={setSearchHospital}/>
            <div className={mybookings.wrapper}> 
                <div>
                    {filteredHospitalData.map((data) =>
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