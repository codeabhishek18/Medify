import styles from './AccordianCard.module.css'
import plus from '../../assets/plus.png'

const AccordianCard = ({data, active, setActive, index}) =>
{
    return(
        <div key={data.id} className={styles.drop}>

            <div className={styles.question}>
                <p>{data.que}</p>
                <p onClick={()=>setActive((prev) => prev === index ? -1 : index)}>
                    <img src={plus} alt="dropdown"/>
                </p>
            </div>

            {active === index &&
            <div className={styles.ans}>
                <p>{data.ans}</p>
            </div>}
            
        </div>
    )
}

export default AccordianCard