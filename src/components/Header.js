import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

function Header(){
    return (
        <>
            <Top>
                <KeeperIcon src="images/Google-keep.svg"/>
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
        padding: 0 3rem;
    }
`;

export default Header;