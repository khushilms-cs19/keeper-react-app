import React,{useState} from 'react';
import styled from 'styled-components';

//Icons 
import NoteAddRoundedIcon from '@material-ui/icons/NoteAddRounded';

function AddNote(props) {
    const [noteTitle, setNoteTitle] = useState("");
    const [noteContent, setNoteContent] = useState("");
    const [clicked, setClicked] = useState(false);


    function handleTitleChange(event){
        document.getElementsByClassName("title")[0].placeholder="Title...";
        setNoteTitle(event.target.value);
    }

    function handleContentChange(event){
        document.getElementsByClassName("content")[0].placeholder="Enter the content here";
        setNoteContent(event.target.value);
    }
    function addTheNote(){
        if(noteTitle===""){
            document.getElementsByClassName("title")[0].style.border="2px solid red";
            document.getElementsByClassName("title")[0].placeholder="Please enter a Title..";
            setTimeout(()=>{
                document.getElementsByClassName("title")[0].style.border="none";
            },1000)
            return;
        }
        if(noteContent===""){
            document.getElementsByClassName("content")[0].style.border="2px solid red";
            document.getElementsByClassName("content")[0].placeholder="Please enter some content.";
            setTimeout(()=>{
                document.getElementsByClassName("content")[0].style.border="none";
            },1000);
            return;
        }
        props.addNote([...props.allNotes,{
            key: (props.allNotes[-1]? props.allNotes[-1].key+1:0),
            title: noteTitle,
            content: noteContent    
        }]);
        setNoteTitle("");
        setNoteContent("");
    }
    function clickedInputArea(){
        document.getElementsByClassName("content")[0].placeholder="Enter the content here.";
        setClicked(true);
    }

    return (
        <NoteToAdd>
            {clicked &&             
                <input className="title" placeholder="Title..." onChange={handleTitleChange} value={noteTitle}/>
            }
            <div>
                <textarea rows={clicked?5:1} cols="32" name="content" id="txtArea" className="content" placeholder="Tap here to add note." onChange={handleContentChange} onClick={clickedInputArea} value={noteContent}></textarea>
                {clicked &&   
                    <button onClick={addTheNote}>
                        <NoteAddRoundedIcon fontSize="large"/>
                    </button>
                }
            </div>
        </NoteToAdd>
    )
}

const NoteToAdd = styled.div`
    width: 23rem;
    gap: 10px;
    height: auto;
    background-color: white;
    margin: 2rem auto;
    padding: 10px 20px;
    border-radius: 10px;
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
            background-color: white;
            font-family: Arial, Helvetica, sans-serif;
            font-size: 30px;
            color: #f5ba13;
            float: right;
            margin-top: 0%;
        }
        button:hover{
            color: grey;
        }
    }
`;

export default AddNote;


