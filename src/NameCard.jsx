import "./NameCard.css";

export function NameCard({info}){

    return(
        <div className="NameCard">
            <hr/>
            <br/>
            <img src={info.image} className="image" alt={info.name}/>
            <br/>
            <div className="allInfo">
                <h3>Name : {info.name}</h3>
                <p> Study : {info.study}</p>
            </div>
        </div>
    )
}