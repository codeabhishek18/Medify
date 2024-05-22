import { useState } from "react";
import './Searchboxcards.css';

const Searchboxcards = ({data}) =>
{
    const [active, setActive] = useState(0);
        
    return(
        <div className="cards">
            <p className="header">You may be looking for</p>
            <div className="category">
                {data.map((item)=>
                (
                    <div
                        className={item.id === active ? "card current" : "card"} 
                        key={item.id} 
                        onClick={()=>setActive(item.id)}>
                        <img src={item.image} alt="icon"/>
                        <p>{item.label}</p>
                    </div>
                ))}
            </div>
        </div>
    )         
}

export default Searchboxcards;