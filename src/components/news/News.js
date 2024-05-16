import { NewsData } from "../../data/Newsdata";
import Newscard from "../newscard/Newscard";
import styles from './News.module.css'

const News = () =>
{
    return(
        <div className={styles.news}>
            <p>Blog & News</p>
            <h1>Read Our Latest News</h1>
            <div className={styles.newscards}>
                {NewsData.map((data)=>
                (
                    <Newscard data={data}/>
                ))}
            </div>
        </div>
    )
}
    
export default News;