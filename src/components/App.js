import React, { useState } from 'react'
import styled from 'styled-components';


//Components 
import Header from './Header';
import Footer from './Footer';
import Grids from './Grids';
import AddNote from './AddNote';

//Data
import {notes as theNotes} from '../allNotes';


function App() {
    
    const [allNotes, setAllNotes] = useState([...theNotes]);    
    
    function deleteNote(index){
        setAllNotes(()=>{
            const newNotes=allNotes.filter((note,idx)=>{
                return (!(index===idx));
            })
            return newNotes;
        })
    }


    return (
        <Body>
            <Header/>
            <AddNote addNote={setAllNotes} allNotes={allNotes}/>
            <Grids allNotes={allNotes} delNote={deleteNote}/>
            <Footer/>
        </Body>
    )
}

const Body = styled.div`
    width: 100%;
    height: 100%;
`;


export default App;
