import React,{ useState } from 'react'
import styled from 'styled-components';

//Components 
import Note from './Note';


function Grids(props) {
    const notes= props.allNotes;


    function deleteTheNote(index){
        props.delNote(index);
    }

    return (
        <Grid>
            {notes.map((x,idx)=>{
                return (<Note
                    key={x.key}
                    ind={idx}
                    title={x.title}
                    content={x.content}
                    deleteNote={deleteTheNote}
                />)
            })}
        </Grid>
    )
}

const Grid = styled.div`
    margin: 50px 50px;
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    overflow: auto;
    height: 40%;
    position: fixed;
    padding: 20px;
    border-radius: 30px;
    border: 1px solid white;
`;

export default Grids;
