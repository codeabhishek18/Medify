import styles from './Newscard.module.css'

const Newscard = ({data}) =>
{
    return(
        <div className={styles.newscard}>
            <div className={styles.newsimg}>
                <img src={data.image} alt="img"/>
            </div>
            <div className={styles.newscontent}>
                <p>
                    <span>{data.topic} | </span>
                    <span>{data.date}</span>
                </p>
                <p className={styles.newsdetail}>{data.content}</p>
                <p><img src={data.authorDP} alt="img"/>{data.author}</p>
            </div>
        </div>
    )
}

export default Newscard;