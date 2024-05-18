import slotstyles from './Slots.module.css'

const Slots = ({slotdata, handleClick, type, selectedSlot, setSelectedSlot}) =>
{
    return(
        <div>
            <div className={slotstyles.slots}>
                <span>{type}</span>
                {slotdata.map((slot, index)=>
                (
                    <span 
                        className={selectedSlot.index === index && selectedSlot.type === type ? `${slotstyles.time} ${slotstyles.selected}` : slotstyles.time} 
                        onClick={()=> 
                        {
                            handleClick(slot.time);
                            setSelectedSlot({type, index})
                        }}>
                        {slot.time}
                    </span>
                ))}
            </div>
            <p></p>
        </div>
    )
}

export default Slots