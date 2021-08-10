import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

//Icons 
import HighlightIcon from '@material-ui/icons/Highlight';

function Header(){
    return (
        <>
            <Top>
                <div style={{paddingLeft:"50px"}}>
                    <HighlightIcon fontSize="large"/>
                </div>
                <span>Keeper</span>
            </Top>
        </>
    );
};

const KeeperIcon = styled.img`
    width: 50px;
    margin: 0 20px;
    box-shadow: 0 0 5px 0 grey;
`;


const Top = styled.div`
    width: 100%;
    height: 7rem;
    color: white;
    background-color: #f5ba13;
    margin: 0 0;
    padding : 0 0;
    display: flex;
    align-items: center;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.3);
    span{
        font-family: "Montserrat", sans-serif;
        font-size: 3rem;
        font-weight: 700;
        padding: 0 2rem;
    }
`;

export default Header;