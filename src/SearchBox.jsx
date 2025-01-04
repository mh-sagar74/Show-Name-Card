import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export function SearchBox({updateInfo}){
    let [nameVal, setNameVal] = useState("");
    let [studyVal, setStudyVal] = useState("");
    let [imageVal, setImageVal] = useState("");

    let handleNameVal = (event) => {
        setNameVal(event.target.value);
    }

    let handleStudyVal = (event) => {
        setStudyVal(event.target.value);
    }

    let handleImageVal = (event) => {
        setImageVal(event.target.value);
    }

    let getInfo = () => {
        let result = {
            image : imageVal,
            name : nameVal,
            study : studyVal,
        };
        return result;
    }

    let handleButton = () => {
        setNameVal("");
        setStudyVal("");
        setImageVal("");
        let newInfo = getInfo;
        updateInfo(newInfo);
    }


    return(
        <div className="SearchBox">
            <TextField id="image" type="text" label="Image URL" variant="filled" value={imageVal} onChange={handleImageVal}/>
            <br/><br/>
            <TextField id="name" type="text" label="Name" variant="filled" value={nameVal} onChange={handleNameVal}/>
            <br/><br/>
            <TextField id="study" type="text" label="Study" variant="filled" value={studyVal} onChange={handleStudyVal}/>
            <br/><br/>
            <Button onClick={handleButton} variant="contained" type="button">Enter</Button>
            <br/><br/>
        </div>
    )
}