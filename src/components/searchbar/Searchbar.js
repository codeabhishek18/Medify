import styles from './Searchbar.module.css'
import locationTag from '../../assets/location.png'
import search from '../../assets/search.png'
import { useState } from 'react'

const Searchbar = ({setLocation}) =>
{
    const [address, setAddress] = useState({state: '', city: ''});

    const handleChange = (e) =>
    {
        setAddress({...address, [e.target.name] : e.target.value})
    }

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        setLocation(address);
    }

    return(
        <div className={styles.searchwrapper}>
            <form className={styles.searchbar} onSubmit={handleSubmit}>

                <div className={styles.searchbar_input} style={{width:'30%'}}>
                    <input 
                        placeholder='State' 
                        name="state" 
                        onChange={handleChange} 
                        value={address.state} 
                        required
                    />
                    <img 
                        src={locationTag} 
                        alt="location"
                    />
                </div>

                <div className={styles.searchbar_input} style={{width:'40%'}}>
                    <input 
                        placeholder='City' 
                        name="city" 
                        onChange={handleChange} 
                        value={address.city}
                    />
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