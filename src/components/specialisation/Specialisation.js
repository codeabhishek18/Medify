import { SpecialisationData } from "../../data/Specialisation";
import styles from './Specialisation.module.css'
import { useState } from "react";

const Specialisation = () =>
{
    const [active, setActive] = useState(0);
    const [viewAll, setViewAll] = useState(false);

    const filteredData = viewAll ? SpecialisationData : SpecialisationData.slice(0,4);
        
    return(
        <div className={styles.specialisation}>
            <div className={styles.splheader}>
                <p>Find By Specialisation</p>
            </div>
            <div className={styles.splcards}>
            {filteredData.map((item)=>
            (
                <div className={item.id === active ? `${styles.card} ${styles.active}` : styles.card} key={item.id} onClick={()=>setActive(item.id)}>
                    <img src={item.image} alt="icon"/>
                    <p>{item.label}</p>
                </div>
            ))}
            </div>
            <button 
                onClick={()=> setViewAll(!viewAll)} 
                className={styles.viewButton}>
                {viewAll ? 'View Less' : 'View All'}
            </button>
        </div>
    )           
}


export default Specialisation;