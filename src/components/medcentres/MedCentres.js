import { useEffect, useState } from 'react'
import HospitalCards from '../hospitalcards/HospitalCards'
import styles from './MedCentres.module.css'
import axios from "axios"
import whitetick from '../../assets/whitetick.png'
import { enqueueSnackbar } from 'notistack'
import Ad from '../ad/Ad'

const MedCentres = ({location}) =>
{
    const [hospitalData, setHospitalData] = useState([]);
    const [current, setCurrent] = useState(-1);
    
    const getHospitalData = async () =>
    {
        try
        {
            const url = `https://meddata-backend.onrender.com/data?state=${location.state}&city=${location.city}`
            const response = await axios.get(url);
            setHospitalData(response.data)
        }
        catch(error)
        {
            enqueueSnackbar(error, {variant:'error'});
        }
    }

    useEffect(() =>
    {
        getHospitalData();
    },[location])

    return(
        <div className={styles.medcontainer}>
            <div className={styles.wrapper}>
                {hospitalData.length>0 && <div className={styles.medheader}>
                    <h3>{hospitalData?.length} Medical centres available in {location.state}</h3>
                    <p><img src={whitetick} alt="verified"/>Book appointments with minimum wait-time & verified doctor details</p>
                </div>} 
                <div className={styles.medcentres}>
                {hospitalData.map((data, index)=>
                (
                    <HospitalCards 
                        data={data} 
                        setCurrent={setCurrent} 
                        current={current} 
                        index={index} 
                        key={data["Provider ID"]}
                    />
                ))}
                </div>
            </div>
            {/* <div className={styles.adwrapper}>
                <Ad/>
            </div> */}
        </div>
    )
}

export default MedCentres