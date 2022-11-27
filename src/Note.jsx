import React from "react";
import IconButton from '@mui/material/IconButton';
import DeleteSweepOutlinedIcon from '@mui/icons-material/DeleteSweepOutlined';
const Note = (props) => {
    const removeNote = () => {
        props.remove(props.id); 
    }
    return <>
        <div className="note">
            <h1>{props.title }</h1>
            <p>{props.content }</p>
        <div className="btncon">
            <IconButton onClick={removeNote}>
                <DeleteSweepOutlinedIcon />
            </IconButton>
        </div>
    </div>
    </>
}
export default Note;