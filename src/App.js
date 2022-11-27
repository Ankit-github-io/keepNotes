import React, { useState } from "react";
import Headers from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";

const App = () => {
  const [addItem, setAdditem] = useState([]);

  const storeNote = (notes) => {
    setAdditem((oldArryData) => {
      return [...oldArryData, notes]
    }) 
    
  }
  const onDelete = (id) => {
    setAdditem(prevArryData=>
      prevArryData.filter((currdata, index) => {
        console.log(currdata);
        return index !== id;
      })
    )
  }
  return <>
    <Headers />
    <CreateNote
      passNote={storeNote}
    />
    <div className="note_con">  
      {addItem.map((value, index) => {
        return <Note
          key={index}
          id={index}
          title={value.title}
          content={value.content}
          remove={onDelete}
        />;
      })}
    </div>
    <Footer />
  </>
}
export default App;



/*-----------------components------------------------------------------
App component,(main)
    Headers
    Create Note Componenet
    Note componenet
    footer component

*/