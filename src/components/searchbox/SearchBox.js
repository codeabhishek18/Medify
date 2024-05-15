import styles from './SearchBox.module.css'
import search from '../../assets/search.png'
import searchicon from '../../assets/searchxs.png'
import Searchboxcards from '../searchboxcards/Searchboxcards'
import { CategoryData } from '../../data/Category'

const SearchBox = () =>
{   
    return(
        <div className={styles.searchbox}>
            <div className={styles.form}>
                <div className={styles.innerdiv}>
                    <input placeholder='State'/>
                    <img className={styles.search} src={searchicon} alt="icon"/>
                </div>
                <div className={styles.innerdiv}>
                    <input placeholder='City'/>
                    <img className={styles.search} src={searchicon} alt="icon"/>
                </div>
                <button><img src={search} alt="searchicon"/>Search</button>
            </div>
            <Searchboxcards data={CategoryData}/>
        </div>
    )
}

export default SearchBox;