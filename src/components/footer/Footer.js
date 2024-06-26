import { FooterData } from "../../data/FooterData";
import styles from './Footer.module.css'
import logo from '../../assets/logo.png'
import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'
import youtube from '../../assets/youtube.png'
import pinterest from '../../assets/pinterest.png'
import FooterList from "../footerlist/FooterList";

const fistColumndata = FooterData.slice(0,5);
const secondColumndata = FooterData.slice(5,10);
const thirdColumndata = FooterData.slice(10);

const Footer = () =>
{
    return(
        <div className={styles.footer}>

            <div className={styles.upperfooter}>
                <div className={styles.left}>
                    <div>
                        <img src={logo} alt="Medify"/>
                    </div>

                    <div className={styles.social}>
                        <img src={facebook} alt="social"/>
                        <img src={twitter} alt="social"/>
                        <img src={youtube} alt="social"/>
                        <img src={pinterest} alt="social"/>
                    </div>
                    
                </div>

                <div className={styles.footergroup}>
                    <FooterList footerdata={fistColumndata}/>
                    <FooterList footerdata={secondColumndata}/>
                    <FooterList footerdata={thirdColumndata}/>
                </div>
            </div>

            <div className={styles.copyright}>
                <p>Copyright ©2023 Surya Nursing Home.com. All Rights Reserved</p>
            </div>

        </div>
    )
}

export default Footer;