import { useState } from 'react';
import Logo from '../logo/Logo';
import Routes from '../routes/Routes';
import styles from './Navbar.module.css';
import CollapseNavbar from '../collapsenavbar/CollapseNavbar';
import Hamburger from '../hamburger/Hamburger';

const Navbar = () =>
{
    const [collapse, setCollapse] = useState(false);

    return(
        <div className={styles.navbar}>
            <Logo/>
            {collapse && <CollapseNavbar setCollapse={setCollapse} collapse={collapse}/>}
            <button className={styles.dropbutton} onClick={()=> setCollapse(!collapse)}>
                <Hamburger/>
            </button>
            <div className={styles.collapse}>
                <Routes/>
            </div>
        </div>
    )
} 

export default Navbar;