import { useState } from "react";
import { FaqData } from "../../data/FaqData"
import styles from './Accordian.module.css'
import AccordianCard from "../accordiancard/AccordianCard";


const Accordian = () =>
{

    const [active, setActive] = useState(-1);

    return(
        <div className={styles.accordian}>
            {FaqData.map((data, index) =>
            (
                <AccordianCard 
                    data={data} 
                    active={active} 
                    setActive={setActive} 
                    index={index}
                />
            ))}
        </div>
    )
}

export default Accordian;