import styles from './SearchBox.module.css'
import Searchboxcards from '../searchboxcards/Searchboxcards'
import { CategoryData } from '../../data/Category'
import Searchbar from '../searchbar/Searchbar'

const SearchBox = () =>
{   
    return(
        <div className={styles.searchbox}>
            <Searchbar type="querys" page="home"/>
            <Searchboxcards data={CategoryData}/>
        </div>
    )
}

export default SearchBox;