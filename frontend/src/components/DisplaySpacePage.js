// external dependencies
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// internal dependencies
import SpacesDataService from '../apis/spaces/SpacesDataService';

// styled components
const Wrapper = styled.div({
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '100vw',
    padding: '4rem 5rem',
    minHeight: '88%',
})

const Name = styled.h1({
    fontSize: '26px',
})

const Location = styled.p({
    fontSize: '20px',
    margin: '0.25rem 0'
})

const Description = styled.p({
    fontSize: '18px',
    margin: '1rem 0',
    width: '40%'
})

const Photo = styled.img({
    width: '500px',
    border: '2px solid black',
    borderRadius: '3px',

})

// component definition
const DisplaySpacePage = (props) => {

    const [ spaceDetails, setSpaceDetails ] = useState({})

    useEffect(() => {
        SpacesDataService.getSpace(props.match.params.id)
        .then(
            response => {
                setSpaceDetails(response.data)
                console.log(spaceDetails)
            }
        )
    }, [])

    return (
        <Wrapper>
            <Name>{spaceDetails.name}</Name>
            <Location>{`${spaceDetails.city}, ${spaceDetails.state}`}</Location>
            <Photo src={spaceDetails.photo} alt={spaceDetails.name} />
            <Description>{spaceDetails.description}</Description>
        </Wrapper>
    )
}

export default DisplaySpacePage;
