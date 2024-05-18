import ad from './Ad.module.css';

const Ad = () =>
{
    return(
        <div className={ad.container}>
            <h3>This World Oral Health Day,</h3>
            <h1>Get a <span>FREE</span> Appointment* with Top Dentists</h1>
            <span>LIMITED PERIOD OFFER</span>
            <h4>#BeSensitiveToOralHealth</h4>
            <p>*T&C Apply - only consultation fee. Procedures/ surgeries not covered</p>
        </div>
    )
}

export default Ad