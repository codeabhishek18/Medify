import { useState } from 'react';
import Searchbar from '../../components/searchbar/Searchbar';
import styles from './FindDoc.module.css'
import MedCentres from '../../components/medcentres/MedCentres';
import Faq from '../../components/faq/Faq';

const FindDoc = () =>
{   
    const [location, setLocation] = useState({})

    return(
        <div className={styles.finddoc}>
            <Searchbar type="querys" setLocation={setLocation}/>
            <MedCentres location={location}/>
            {/* <Faq/> */}
        </div>
    )
}

export default FindDoc;