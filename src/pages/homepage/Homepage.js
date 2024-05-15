import styles from './Homepage.module.css';
import Headline from "../../components/headline/Headline"
import Navbar from '../../components/navbar/Navbar';
import Herosection from '../../components/herosection/Herosection';

const Homepage = () =>
{
    return(
        <div className={styles.homepage}>
            <Headline/>
            <Navbar/>
            <Herosection/>
        </div>
    )
}

export default Homepage