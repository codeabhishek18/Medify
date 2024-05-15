import { Navitems } from '../../data/Navitems.jsx';
import styles from './Routes.module.css';

const Routes = () =>
{
    return(
        <div className={styles.routes}>
            <ul>
                {Navitems?.map((data) =>
                (
                    <li key={data.id}>{data.item}</li>
                ))}
            </ul>
            <span className={styles.bookings}>My Bookings</span>
        </div>
    )
}

export default Routes