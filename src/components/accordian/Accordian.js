import { useState } from "react";
import { FaqData } from "../../data/FaqData"
import styles from './Accordian.module.css'
import plus from '../../assets/plus.png'

const Accordian = () =>
{

    const [active, setActive] = useState(-1);

    return(
        <div className={styles.accordian}>
            {FaqData.map((data, index) =>
            (
                <div key={data.id} className={styles.drop}>
                    <div className={styles.question}>
                        <p>{data.que}</p>
                        <p onClick={()=>setActive((prev) => prev === index ? -1 : index)}><img src={plus} alt="dropdown"/></p>
                    </div>
                    {active === index &&
                    <div className={styles.ans}>
                        <p>{data.ans}</p>
                    </div>}
                </div>
            ))}
        </div>
    )
}

export default Accordian;