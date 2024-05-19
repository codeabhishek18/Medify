import contact from './Contact.module.css'
import phone from '../../assets/mobileapp1.png'
import app from '../../assets/mobileapp2.png'
import applestore from '../../assets/applestore.png'
import googleplay from '../../assets/googleplay.png'
import arrow from '../../assets/arrow.png'

const Contact = () =>
{

    return(
        <div className={contact.container}>
            <div className={contact.phone1}>
                <img src={phone} alt="phone"/>
                <img src={app} alt="phone"/>
            </div>
            <div className={contact.phone2}>
                <img src={phone} alt="phone"/>
                <img src={app} alt="phone"/>
            </div>
            <div className={contact.content}>
                <div className={contact.contentheader}>
                    <h1>Download the <span>Medify</span> App</h1>
                    <img src={arrow} alt="img"/>
                </div>
                <p>Get the link to download the app</p>
                <div className={contact.smswrapper}>
                    <p>+91</p>
                    <input placeholder='Enter phone number'/>
                    <button>Send SMS</button>
                </div>
                <div className={contact.app}>
                    <img src={googleplay} alt="img"/>
                    <img src={applestore} alt="img"/>
                </div>
            </div>
        </div>
    )
}

export default Contact