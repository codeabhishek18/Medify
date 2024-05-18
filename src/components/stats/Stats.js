import styles from './Stats.module.css'
import stats from '../../assets/stats.png'

const Stats = () =>
{
    return(
        <div className={styles.stats}>
            <div className={styles.statscontent}> 
                <span>CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.</span>
                <h1>Our Families</h1>

                <p>We will work with you to develop individualised care plans, 
                   including management of chronic diseases. 
                   If we cannot assist, we can provide referrals or advice about 
                   the type of practitioner you require. 
                   We treat all enquiries sensitively and in the strictest confidence.
                </p>
                
            </div>
            <img src={stats} alt="img"/>
        </div>
    )
}

export default Stats;