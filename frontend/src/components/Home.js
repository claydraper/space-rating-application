// external dependencies
import React from 'react';
import styled from 'styled-components';
import SpaceList from './SpaceList';

const Wrapper = styled.div({
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '100vw',
})

const Container = styled.div({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f0f0',
    padding: '5rem',
})

const Intro = styled.p({
    padding: '0.5rem',
})

const Home = () => {
    return (
        <Wrapper>
            <Container>
                <h2>Welcome to Third Rate!</h2>
                <Intro>Check out the list of spaces below or sign up to add a new space.</Intro>
            </Container>
            <SpaceList />
        </Wrapper>
    )
}

export default Home;
