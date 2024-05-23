import arrow from '../../assets/rightshift.png'
import footerlist from './FooterList.module.css'

const FooterList = ({footerdata}) =>
{
    return(
        <div className={footerlist.right}>
            {footerdata.map((data, index)=>
            (
                <span key={index} className={footerlist.lists}>
                    <img src={arrow} alt="arrow"/> 
                    {data.name}
                </span>
            ))}
        </div>
    )
}

export default FooterList;