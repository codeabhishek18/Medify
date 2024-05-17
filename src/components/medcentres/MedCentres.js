import { useEffect, useState } from 'react'
import HospitalCards from '../hospitalcards/HospitalCards'
import styles from './MedCentres.module.css'
import axios from "axios"
import whitetick from '../../assets/whitetick.png'

const MedCentres = ({location}) =>
{
    const [hospitalData, setHospitalData] = useState([]);
    
    const getHospitalData = async () =>
    {
        const url = `https://meddata-backend.onrender.com/data?state=${location.state}&city=${location.city}`
        const response = await axios.get(url);
        setHospitalData(response.data)
    }

    useEffect(() =>
    {
        getHospitalData();
    },[location])

    return(
        <div className={styles.medcontainer}>
            {hospitalData.length ? 
            <div className={styles.wrapper}>
                <div>
                    <h3>{hospitalData?.length} Medical centres available in {location.state}</h3>
                    <p><img src={whitetick} alt="verified"/>Book appointments with minimum wait-time & verified doctor details</p>
                </div>
                {hospitalData.map((data)=>
                (
                    <HospitalCards data={data} key={data["Provider ID"]}/>
                ))}
            </div> : ''}
        </div>
    )
}

export default MedCentres