// external dependencies
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// internal dependencies
import SpaceList from './SpaceList';
import SpacesDataService from '../apis/spaces/SpacesDataService';


// styled components
const Wrapper = styled.div({
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '100vw',
    minHeight: '88%',
    backgroundColor: '#EFF2F1',
})

const Container = styled.div({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DEE2DF',
    padding: '4rem 0 5rem 0',
})

const Intro = styled.p({
    padding: '1rem 0.5rem 0.5rem 0.5rem',
    width: '26rem',
    textAlign: 'center',
})

const CreateButton = styled.button({
    borderRadius: '5px',
    padding: '0.5rem',
    backgroundColor: '#3945e3',
    color: '#EFF2F1',
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

const Success = styled.div({
    position: 'absolute',
    top: '4.65rem',
    display: 'flex',
    height: '40px',
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#068036',
    backgroundColor: '#a5ed93',
    borderRadius: '8px',

})

// component definition
const DisplayUserPage = (props) => {

    if(props.history.location.state === undefined) {
        props.history.location.state = false
    }

    // const [spaceDetails, setSpaceDetails] = useState([])

    // const parseEmail = email => {
    //     let firstLetter = email.charAt(0).toUpperCase()
    //     let partialUsername = email.substring(1, email.indexOf("@"))
    //     return firstLetter + partialUsername
    // }

    // useEffect(() => {
    //     SpacesDataService.getAllUserSpaces(sessionStorage.userID)
    //     .then(
    //         response => {
    //             console.log(response)
    //             setSpaceDetails(response.data)
    //         }
    //     )
    //     .catch(
    //         error => {
    //             console.log("error: ", error)
    //         }
    //     )
    // }, [])

    const handleCreateClick = () => {
        props.history.push('/spaces/new')
    }

    return (
        <Wrapper>
            <Container>
                {props.history.location.state.successfulUpdate && <Success>Space updated successfully</Success>}
                {props.history.location.state.successfulSubmit && <Success>Space created successfully</Success>}
                <h2>Hello, {sessionStorage.FirstName}</h2>
                <Intro>Here you can create a new space, or you can view, update, or delete your existing spaces below.</Intro>
                <CreateButton onClick={() => handleCreateClick()}>Create a new space</CreateButton>
            </Container>
            <SpaceList />
        </Wrapper>
    )
}

export default DisplayUserPage;
