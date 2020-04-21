// external dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// styled components
const Wrapper = styled.div({
    backgroundColor: '#323DC7',
    color: '#FFFFFF',
    height: '60px',
    lineHeight: '60px',
    bottom: 0,
    paddingLeft: '1rem',
})

// component definition
const Footer = () => {

    return (
        <Wrapper>
            <p>{`Copyright ${String.fromCharCode(169)} 2020 Third Rate`}</p>
        </Wrapper>
    )
}

export default Footer;
