import logo from '../../assets/logo.png'
import styles from './Logo.module.css'

const Logo = () =>
{
    return(
        <img className={styles.logo} src={logo} alt="logo"/>
    )
}

export default Logo;