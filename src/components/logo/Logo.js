import logo from '../../assets/logo.png'
import styles from './Logo.module.css'
import { Link } from 'react-router-dom'

const Logo = () =>
{
    return(
        <Link to='/'><img className={styles.logo} src={logo} alt="logo"/></Link>
    )
}

export default Logo;