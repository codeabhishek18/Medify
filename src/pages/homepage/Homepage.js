import styles from './Homepage.module.css';
import Herosection from '../../components/herosection/Herosection';
import Specialisation from '../../components/specialisation/Specialisation';
import PatientCare from '../../components/patientcare/PatientCare';
import News from '../../components/news/News';
import Stats from '../../components/stats/Stats';

const Homepage = () =>
{
    return(
        <div className={styles.homepage}>  
            <Herosection/>
            <Specialisation/>
            <PatientCare/>
            <News/>
            <Stats/>
        </div>
    )
}

export default Homepage