import styles from './Searchbar.module.css'
import locationTag from '../../assets/location.png'
import search from '../../assets/search.png'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { enqueueSnackbar } from 'notistack'
import { useLocation } from '../../contextapi/locationContext'
import { Navigate } from 'react-router-dom'

const Searchbar = ({page, type, setSearchHospital}) =>
{
    const [address, setAddress] = useState({state: '', city: ''});
    const [citiesList, setCitiesList] = useState([]);
    const [hospitalName, setHospitalName] = useState('');   
    const { updateLocation, statesList } = useLocation();
    const [navigate, setNavigate] = useState(false);
    
    const handleChange = (e) =>
    {
        setAddress({...address, [e.target.name] : e.target.value})
        getCities()
    }

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        updateLocation(address);
        setNavigate(true);
    }

    const getCities = async () =>
    {
        try
        {
            const url = `https://meddata-backend.onrender.com/cities/${address.state}`
            const response = await axios.get(url);
            setCitiesList(response.data)
        }
        catch(error)
        {
            console.log(error);
        }
    }

    useEffect(()=>
    {
        getCities();
        setCitiesList([]);
        setAddress({state:address.state, city:''});
        setNavigate(false);
    },[address.state])

    const handleSearch = (e) =>
    {   
        e.preventDefault();
        setSearchHospital(hospitalName);
    }   

    return(
        <div className={page === 'home' ? `${styles.searchwrapper} ${styles.home}` : styles.searchwrapper}>
            {type === "bookings" && <h1 className={styles.bookingheader}>My Bookings</h1>}
            {type !== "bookings" ?
            <form className={styles.searchbar} onSubmit={handleSubmit}>

                <div className={styles.searchbar_input}>
                    <select name="state" onChange={handleChange}>
                        <option value="" >State</option>
                        {statesList?.map((state) =>
                        (
                            <option key={state} value={state}>{state}</option>
                        ))}
                    </select>

                    <img 
                        src={locationTag} 
                        alt="location"
                    />
                </div>

                <div className={styles.searchbar_input}>
                    <select name="city" onChange={handleChange}>
                        <option value="" >City</option>
                        {citiesList?.map((city) =>
                        (
                            <option value={city}>{city}</option>
                        ))}
                    </select>

                    <img 
                        src={locationTag}
                        alt="location"
                    />
                </div>

                <button type='submit'>
                    <img src={search} alt="search"/>
                        Search
                </button>
                {page==='home' && navigate && <Navigate to={'/doctors'}/>}
            </form> 
            
            :

            <form className={styles.bookbar} onSubmit={handleSearch}>
                <input 
                    placeholder='Search By Hospital' 
                    name="hospital" 
                    onChange={(e)=> setHospitalName(e.target.value)} 
                    value={hospitalName}
                    style={{paddingLeft:'20px'}}
                />

                <button type='submit'>
                    <img src={search} alt="search"/>
                    Search
                </button>
            </form>}
        </div>
    )
}

export default Searchbar;