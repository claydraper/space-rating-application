// external dependencies
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// styled components
const Wrapper = styled.div({
    display: 'flex',
    flexDirection: 'column',
    height: '88%',
    alignItems: 'center',
    backgroundColor: '#EFF2F1',
})

const Title = styled.h1({
    fontSize: '20px',
    marginTop: '10rem'
})

const StyledLink = styled(Link)({
    textDecoration: 'none',
    color: '#2456e0'
})

// component definition
const ErrorPage = () => {

    return (
        <Wrapper>
            <Title>
                Woops, something went wrong. Click <StyledLink to="/">here</StyledLink> to return to the home screen.
            </Title>
        </Wrapper>
    )

}

export default ErrorPage;
