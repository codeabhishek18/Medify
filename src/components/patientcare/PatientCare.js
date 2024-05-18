import Patientcareimg from '../../assets/Patientcare.png'
import styles from './PatientCare.module.css';
import bluetick from '../../assets/bluetick.png'

const PatientCare = () =>
{

    return(
        <div className={styles.patientCare}>
            <img src={Patientcareimg} alt="img"/>
            <div className={styles.carecontent}>
                <span>HELPING PATIENTS FROM AROUND THE GLOBE!!</span>
                <h1>Patient <span>Caring</span></h1>
                <p>Our goal is to deliver quality of care in a courteous, respectful, 
                   and compassionate manner. We hope you will allow us to care for you 
                   and strive to be the first and best choice for healthcare.</p>
                <div className={styles.carecontentlower}>
                    <p><img src ={bluetick} alt="img"/>Stay Updated About Your Health</p>
                    <p><img src ={bluetick} alt="img"/>Check Your Results Online</p>
                    <p><img src ={bluetick} alt="img"/>Manage Your Appointments</p>
                </div>
            </div>  
        </div>
    )
}

export default PatientCare;