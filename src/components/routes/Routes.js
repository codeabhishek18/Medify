import { Navitems } from '../../data/Navitems.jsx';
import styles from './Routes.module.css';
import { Link } from "react-router-dom";

const Routes = ({type, setCollapse, collapse}) =>
{

    const handleClick = () =>
    {
        if(type==="navbar")
            return;
        setCollapse(false)
    }

    return(
        <div className={`${styles.collapseroutes} ${styles.routes}`}>

            {collapse && 
                <button 
                    className={styles.navclose} 
                    onClick={()=> setCollapse(false)}>
                    Close
                </button>}

            <ul>
                {Navitems?.map((data) =>
                (
                    <li 
                        key={data.id} 
                        className={styles.collapse} 
                        onClick={handleClick}> 
                        <Link 
                            to={data.to} 
                            style={{textDecoration:'none', color:'var(--secondary-color)'}}>
                            {data.route}
                        </Link>
                    </li>
                ))}
            </ul>

            <span 
                className={styles.bookings} 
                onClick={handleClick}>
                <Link to='/mybookings' 
                    style={{textDecoration:'none', color:'white'}}>
                    My Bookings
                </Link>
            </span>

        </div>
    )
}

export default Routes