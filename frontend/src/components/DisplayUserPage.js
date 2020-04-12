// external dependencies
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SpacesDataService from '../apis/spaces/SpacesDataService';

// internal dependencies
import SpaceList from './SpaceList';


// styled components
const Wrapper = styled.div({
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '100vw',
    minHeight: '88%',
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
    padding: '1rem 0.5rem 0.5rem 0.5rem',
    width: '26rem',
    textAlign: 'center',
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
const DisplayUserPage = (props) => {

    const [spaceDetails, setSpaceDetails] = useState([])

    useEffect(() => {
        SpacesDataService.getAllUserSpaces(sessionStorage.userID)
        .then(
            response => {
                console.log(response)
                setSpaceDetails(response.data)
            }
        )
        .catch(
            error => {
                console.log("error: ", error)
            }
        )
    }, [])

    const handleCreateClick = () => {
        props.history.push('/spaces/new')
    }

    return (
        <Wrapper>
            <Container>
                <h2>Hello, {sessionStorage.username}</h2>
                <Intro>Here you can create a new space, or you can view, update, or delete your existing spaces below.</Intro>
                <CreateButton onClick={() => handleCreateClick()}>Create a new space</CreateButton>
            </Container>
            <SpaceList />
        </Wrapper>
    )
}

export default DisplayUserPage;
