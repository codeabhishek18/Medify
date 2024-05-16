import styles from './Homepage.module.css';
import Headline from "../../components/headline/Headline"
import Navbar from '../../components/navbar/Navbar';
import Herosection from '../../components/herosection/Herosection';
import Carousel from '../../components/carousel/Carousel';
import { CarouselData } from '../../data/CarouselData';
import Specialisation from '../../components/specialisation/Specialisation';
import Footer from '../../components/footer/Footer';
import PatientCare from '../../components/patientcare/PatientCare';

const Homepage = () =>
{
    return(
        <div className={styles.homepage}>
            <Headline/>
            <Navbar/>
            <Herosection/>
            <Carousel data={CarouselData}/>
            <Specialisation/>
            <PatientCare/>
            <Footer/>
        </div>
    )
}

export default Homepage