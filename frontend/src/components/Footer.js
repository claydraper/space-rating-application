// external dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// styled components
const Wrapper = styled.div({
    backgroundColor: '#33333D',
    color: '#FFFFFF',
    padding: '1.5rem',
})

// component definition
const Footer = () => {

    return (
        <Wrapper>
            <p>{'Copyright ' + String.fromCharCode(169) + ' 2020 Third Rate'}</p>
        </Wrapper>
    )
}

export default Footer;
