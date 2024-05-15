import Logo from '../logo/Logo';
import Routes from '../routes/Routes';
import styles from './Navbar.module.css';

const Navbar = () =>
{
    return(
        <div className={styles.navbar}>
            <Logo/>
            <Routes/>
        </div>
    )
} 

export default Navbar;