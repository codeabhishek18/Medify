import faq from '../../assets/faq.png'
import Accordian from '../accordian/Accordian';
import styles from './Faq.module.css'

const Faq = () =>
{
    return(
        <div className={styles.faq}>
            <p>Get Your Answer</p>
            <h1>Frequently Asked Questions</h1>
            <div className={styles.faqwrapper}>
                <img src={faq} alt="img"/>
                <Accordian/>
            </div>
        </div>
    )
}

export default Faq;