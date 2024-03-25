import './Branche.css';

const Branche = ({info}) => {
    return (
        <div className="branche">
            <strong>{info.title}</strong>
            <p>{info.adresse}</p>
        </div>
    )
}

export default Branche
