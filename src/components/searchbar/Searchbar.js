import styles from './Searchbar.module.css'
import locationTag from '../../assets/location.png'
import search from '../../assets/search.png'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { enqueueSnackbar } from 'notistack'

const Searchbar = ({setLocation}) =>
{
    const [address, setAddress] = useState({state: '', city: ''});
    const [statesList, setStateslist] = useState([]);
    const [citiesList, setCitiesList] = useState([]);

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
            // localStorage.setItem('States', JSON.stringify(response.data))
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
            const states = JSON.parse(localStorage.getItem('States'));
            setStateslist(states)
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
        getCities();
    },[address.state])

    return(
        <div className={styles.searchwrapper}>
            <form className={styles.searchbar} onSubmit={handleSubmit}>

                <div className={styles.searchbar_input} style={{width:'30%'}}>
                    {/* <input 
                        placeholder='State' 
                        name="state" 
                        onChange={handleChange} 
                        value={address.state} 
                        required
                    /> */}

                    <select name="state" onChange={handleChange}>
                        <option value="" disabled>State</option>
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
                    {/* <input 
                        placeholder='City' 
                        name="city" 
                        onChange={handleChange} 
                        value={address.city}
                    /> */}

                    <select name="city" onChange={handleChange}>
                        <option value="" disabled>City</option>
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
        </div>
    )
}

export default Searchbar;