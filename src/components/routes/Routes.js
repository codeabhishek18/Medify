import { Navitems } from '../../data/Navitems.jsx';
import styles from './Routes.module.css';
import { Link } from "react-router-dom";

const Routes = () =>
{
    return(
        <div className={styles.routes}>
            <ul>
                {Navitems?.map((data) =>
                (
                    <li key={data.id}>
                        <Link to={data.to} style={{textDecoration:'none', color:'var(--secondary-color)'}}>{data.route}</Link>
                    </li>
                ))}
            </ul>
            <span className={styles.bookings}>
                <Link to='/mybookings' style={{textDecoration:'none', color:'white'}}>
                    My Bookings
                </Link>
            </span>
        </div>
    )
}

export default Routes