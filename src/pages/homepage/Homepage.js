import styles from './Homepage.module.css';
import Headline from "../../components/headline/Headline"
import Navbar from '../../components/navbar/Navbar';
import Herosection from '../../components/herosection/Herosection';
import Carousel from '../../components/carousel/Carousel';
import { CarouselData } from '../../data/CarouselData';
import Specialisation from '../../components/specialisation/Specialisation';
import Footer from '../../components/footer/Footer';
import PatientCare from '../../components/patientcare/PatientCare';
import News from '../../components/news/News';
import Stats from '../../components/starts/Stats';
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