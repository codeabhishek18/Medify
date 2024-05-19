import styles from './Searchbar.module.css'
import locationTag from '../../assets/location.png'
import search from '../../assets/search.png'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { enqueueSnackbar } from 'notistack'

const Searchbar = ({setLocation, type, setSearchHospital}) =>
{
    const [address, setAddress] = useState({state: '', city: ''});
    const [statesList, setStateslist] = useState([]);
    const [citiesList, setCitiesList] = useState([]);
    const [hospitalName, setHospitalName] = useState('');

    const handleChange = (e) =>
    {
        setAddress({...address, [e.target.name] : e.target.value})
        getCities()
    }

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        setLocation(address);
    }

    const getStates = async () =>
    {
        try
        {
            const url = 'https://meddata-backend.onrender.com/states';
            const response = await axios.get(url);
            setStateslist(response.data);   
            localStorage.setItem('States', JSON.stringify(response.data))
        } 
        catch(error)
        {
            enqueueSnackbar('Error occured, try again or refresh', {variant:'error'})
        }   
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
            enqueueSnackbar('Error occured, try again or refresh', {variant:'error'})
        }
    }

    useEffect(() =>
    {
        getStates();
    },[])

    useEffect(()=>
    {
        setStateslist(JSON.parse(localStorage.getItem('States')));
        getCities();
    },[address.state])

    const handleSearch = (e) =>
    {   
        e.preventDefault();
        setSearchHospital(hospitalName);
    }   

    return(
        <div className={styles.searchwrapper}>
            {type === "bookings" && <h1 className={styles.bookingheader}>My Bookings</h1>}
            {type !== "bookings" ?
            <form className={styles.searchbar} onSubmit={handleSubmit}>

                <div className={styles.searchbar_input} style={{width:'30%'}}>
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

                <div className={styles.searchbar_input} style={{width:'40%'}}>
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