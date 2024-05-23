import { Navitems } from '../../data/Navitems.jsx';
import styles from './Routes.module.css';
import { Link } from "react-router-dom";

const Routes = ({setCollapse, collapse}) =>
{
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
                        onClick={()=> setCollapse(false)}> 
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
                onClick={()=> setCollapse(false)}>
                <Link to='/mybookings' 
                    style={{textDecoration:'none', color:'white'}}>
                    My Bookings
                </Link>
            </span>

        </div>
    )
}

export default Routes