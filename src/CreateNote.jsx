import React, { useState } from "react";
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';

const CreateNote = (props) => {
    const [expand, setExpand] = useState(false);
    const [notes, setNote] = useState({ title: "", content: "" });
    
    const addEvent = () => {
        props.passNote(notes);
        setNote({ title: "", content: "" });
        setExpand(false);
    }

    const InputEvent = (event) => {
        // const value = event.target.value;
        // const name = event.target.name;
        const { name, value } = event.target;
        setNote((oldObjData) => {
            return { ...oldObjData, [name]:value}
        });
    }
    const expandIt= () => {
        setExpand(true);
    }
    const shrink = () => {
        setExpand(false);
    }
    const onInput = (inputEventOn)=> {
    }
    return <>
        <div className="main_note" >
            <form className="grow_wrap">
                {expand ?
                    <input className="transparent texti"
                        placeholder="Title" name="title"
                        onChange={InputEvent}
                        value={notes.title}
                    />
                : null}
                <textarea className="transparent texta"
                    placeholder="Take a note..."
                    name="content"
                    spellCheck="false"
                    onInput={onInput}
                    onChange={InputEvent}
                    value={notes.content}
                    onClick={expandIt}
                    onDoubleClick={shrink}
                />
                {expand ?
                    <div className="btncon" >
                        <IconButton onClick={addEvent}>
                            <AddIcon />
                        </IconButton>
                    </div>
                : null}
            </form>
        </div>
    </>
}
export default CreateNote;