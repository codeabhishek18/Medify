import { SpecialisationData } from "../../data/Specialisation";
import styles from './Specialisation.module.css'
import { useState } from "react";

const Specialisation = () =>
{
    const [active, setActive] = useState(0);
        
    return(
        <div className={styles.specialisation}>
            <div className={styles.splheader}>
                <p>Find by specialisation</p>
            </div>
            <div className={styles.splcards}>
            {SpecialisationData.map((item)=>
            (
                <div className={item.id === active ? `${styles.card} ${styles.active}` : styles.card} key={item.id} onClick={()=>setActive(item.id)}>
                    <img src={item.image} alt="icon"/>
                    <p>{item.label}</p>
                </div>
            ))}
            </div>
        </div>
    )           
}


export default Specialisation;