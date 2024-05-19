import styles from './Homepage.module.css';
import Herosection from '../../components/herosection/Herosection';
import Specialisation from '../../components/specialisation/Specialisation';
import PatientCare from '../../components/patientcare/PatientCare';
import News from '../../components/news/News';
import Stats from '../../components/stats/Stats';
import OfferCarousel from '../../components/offercarousel/OfferCarousel';
import DoctorsCarousel from '../../components/doctorscarousel/DoctorsCarousel';
import Faq from '../../components/faq/Faq';

const Homepage = () =>
{
    return(
        <div className={styles.homepage}>  
            <Herosection/>
            <OfferCarousel/>
            <Specialisation/>
            <DoctorsCarousel/>
            <PatientCare/>
            <News/>
            <Stats/>
            <Faq/>
        </div>
    )
}

export default Homepage