import React from 'react'
import styled from 'styled-components';

function Note(props) {

    function deleteTheNote(){
        props.deleteNote((props.ind));
    }


    return (
        <OneNote>
            <img src="images/pushpin.svg" width="40px" styles="float: left;"/>
            <button onClick={deleteTheNote}>&times;</button>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </OneNote>
    )
}

const OneNote = styled.div`
    background-color: #fffee0;
    border-radius: 20px;
    width: 20rem;
    height: auto;
    padding: 20px;
    border: none;
    box-shadow: 1px 7px 19px -2px rgba(0,0,0,0.75);
    -webkit-box-shadow: 1px 7px 19px -2px rgba(0,0,0,0.75);
    -moz-box-shadow: 1px 7px 19px -2px rgba(0,0,0,0.75);
    h3{
        text-align: center;
    }
    p{
        padding: 10px 20px;
        height: auto;
    }
    button{
            display: flex;
            justify-content: center;
            border: none;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background-color: #f5ba13;
            font-family: Arial, Helvetica, sans-serif;
            font-size: 30px;
            color: grey;
            float: right;
            margin-top: 0%;
        }
`;





export default Note;
