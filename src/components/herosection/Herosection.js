import styles from './Herosection.module.css'
import heroimage from '../../assets/heroimage.png' 

const Herosection = () =>
{
    return(
        <div className={styles.herosection}>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <div className={styles.innercontent}>
                        <h3>Skip the travel! Find Online</h3>
                        <span>Medical <span style={{color:'var(--primary-color)'}}>Centers</span></span>
                    </div>
                    <p>Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.</p>
                    <button>Find Centers</button>
                </div>
                <div className={styles.heroimage}>
                    <img src={heroimage} alt="heroimage"/>
                </div>
            </div>
            <div className={styles.searchbox}>
            </div>
        </div>
    )
}

export default Herosection;

