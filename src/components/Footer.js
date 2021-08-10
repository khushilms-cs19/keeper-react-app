import React from 'react'
import styled from 'styled-components';


function Footer() {
    return (
        <Foot >
            <span>Copyright © {new Date().getFullYear()}</span>
        </Foot>
    );
};

const Foot = styled.footer`
    background-color: #F2EDC6;
    bottom: 0;
    height: 40px;
    color: grey;
    font-size: 20px;
    border-radius: 5px;
    span{
        margin: 0 auto;
    }
`;

export default Footer;
