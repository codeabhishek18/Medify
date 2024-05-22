import Routes from "../routes/Routes";
import collapsestyles from './CollapseNavbar.module.css'

const CollapseNavbar = ({setCollapse, collapse}) =>
{
    return(
        <div className={collapsestyles.container}>
            <Routes setCollapse={setCollapse} collapse={collapse}/>
        </div>
    )
}

export default CollapseNavbar;