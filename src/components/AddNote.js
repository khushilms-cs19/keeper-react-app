import React,{useState} from 'react';
import styled from 'styled-components';

function AddNote(props) {
    const [noteTitle, setNoteTitle] = useState("");
    const [noteContent, setNoteContent] = useState("");


    function handleTitleChange(event){
        setNoteTitle(event.target.value);
    }

    function handleContentChange(event){
        setNoteContent(event.target.value);
    }
    function addTheNote(){
        props.addNote([...props.allNotes,{
            key: (props.allNotes[-1]? props.allNotes[-1].key+1:0),
            title: noteTitle,
            content: noteContent    
        }]);
        setNoteTitle("");
        setNoteContent("");
    }

    return (
        <NoteToAdd>
            <input className="title" placeholder="Title..." onChange={handleTitleChange} value={noteTitle}/>
            <div>
                <textarea rows="5" cols="32" name="content" placeholder="Enter the content here" onChange={handleContentChange} value={noteContent}></textarea>
                <button onClick={addTheNote}>+</button>
            </div>
        </NoteToAdd>
    )
}

const NoteToAdd = styled.div`
    width: 23rem;
    gap: 10px;
    height: 180px;
    background-color: white;
    margin: 2rem auto;
    padding: 10px 20px;
    border-radius: 10px;
    min-height: 100px;
    font-family: Arial, Helvetica, sans-serif;
    input{
        padding: 10px 0px;
        border: none;
        text-align: center;
        width: 100%;
        font-size: medium;
        font-weight: bold;
    }
    input:focus{
        outline: none;
    }
    div{
        display: flex;
        align-items: center;
        gap: 20px;

        textarea{
            padding: 10px 5px;
            border: none;
            font-size: 15px;
        }
        textarea:focus{
            outline: none;
        }
        button{
            border: none;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: #f5ba13;
            font-family: Arial, Helvetica, sans-serif;
            font-size: 30px;
            color: grey;
            float: right;
            margin-top: 0%;
        }
    }
`;

export default AddNote;


