import doccards from './DoctorsCard.module.css'

const DoctorsCard = ({data}) =>
{

    return(
        <div className={doccards.container}>
            <div className={doccards.docimage}>
                <img src={data.image} alt="doctor"/>
            </div>
            <div className={doccards.content}>
                <h3>{data.name}</h3>
                <span>{data.department}</span>
            </div>
        </div>
    )
}

export default DoctorsCard