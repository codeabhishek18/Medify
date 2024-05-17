import { useState } from 'react';
import Searchbar from '../../components/searchbar/Searchbar';
import styles from './FindDoc.module.css'
import MedCentres from '../../components/medcentres/MedCentres';

const FindDoc = () =>
{   
    const [location, setLocation] = useState({})

    return(
        <div className={styles.finddoc}>
            <Searchbar setLocation={setLocation}/>
            <MedCentres location={location}/>
        </div>
    )
}

export default FindDoc;