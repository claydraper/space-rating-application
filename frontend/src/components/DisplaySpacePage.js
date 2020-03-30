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
    padding: '2rem',
    minHeight: '88%',
})

const Name = styled.h1({

})

const Location = styled.p({

})

const Description = styled.p({

})

const Photo = styled.img({
    width: '500px',

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
