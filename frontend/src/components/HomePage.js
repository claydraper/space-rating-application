// external dependencies
import React from 'react';
import styled from 'styled-components';

// internal dependencies
import Header from './Header';
import Footer from './Footer';
import SpaceList from './SpaceList';

// styled components
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

const CreateButton = styled.button({
    borderRadius: '3px',
    padding: '0.5rem',
    backgroundColor: '#2456e0',
    color: '#FFFFFF',
    fontSize: '16px',
    marginTop: '1rem',
    outline: 'none',
    ':hover': {
        cursor: 'pointer',
    },
    ':active': {
        backgroundColor: '#a1bbe6',
        color: '#2456e0',
    }
})

// component definition
const Home = (props) => {

    const handleCreateClick = () => {
        props.history.push('/spaces/new')
    }

    return (
        <>
            <Header />
            <Wrapper>
                <Container>
                    <h2>Welcome to Third Rate!</h2>
                    <Intro>Check out the list of spaces below or add a new space.</Intro>
                    <CreateButton onClick={() => handleCreateClick()}>Create a new space</CreateButton>
                </Container>
                <SpaceList />
            </Wrapper>
            <Footer />
        </>
    )
}

export default Home;
