import styles from './Homepage.module.css';
import Herosection from '../../components/herosection/Herosection';
import Carousel from '../../components/carousel/Carousel';
import { CarouselData } from '../../data/CarouselData';
import Specialisation from '../../components/specialisation/Specialisation';
import PatientCare from '../../components/patientcare/PatientCare';
import News from '../../components/news/News';
import Stats from '../../components/stats/Stats';
import Faq from '../../components/faq/Faq';

const Homepage = () =>
{
    return(
        <div className={styles.homepage}>  
            <Herosection/>
            <Carousel data={CarouselData}/>
            <Specialisation/>
            <PatientCare/>
            <News/>
            <Stats/>
            <Faq/>
        </div>
    )
}

export default Homepage