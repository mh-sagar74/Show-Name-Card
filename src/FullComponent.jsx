import { SearchBox } from "./SearchBox";
import { NameCard } from "./NameCard";
import { useEffect, useState } from "react";
import "./FullComponent.css";

export function FullComponent(){
    let [visibleCard, setVisibleCard] = useState(false);
    const [details, setDetails] = useState({
        image : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
        name : "Sample",
        study : "Sample College",
    });

    let updateInfo = (newInfo)=>{
        setDetails(newInfo);
        setVisibleCard(true);
    }

    return(
        <div className="FullComponent">
            <h1>Show Details in Card</h1>
            <SearchBox updateInfo={updateInfo}/>
            {visibleCard ? <NameCard info={details}/> : null}
        </div>
    )
}