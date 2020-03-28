// external dependencies
import React, {useState, useEffect } from 'react';
import styled from 'styled-components';

// local dependencies
import SpaceCard from './SpaceCard';
import SpacesDataService from '../apis/spaces/SpacesDataService';
// import coffee1 from '../assets/coffee1.jpg';
// import faylib1 from '../assets/faylib1.jpg';
// import faylib2 from '../assets/faylib2.jpg';
// import holler1 from '../assets/holler1.jpg';
// import onyx1 from '../assets/onyx1.jpg';
// import randlib1 from '../assets/randlib1.jpg';

// styled components
const Wrapper = styled.div({
    
})

const SpaceGrid = styled.div({
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 20%)',
    justifyContent: 'space-around',
    margin: '3rem 5rem',
    rowGap: '2rem',
})

// component definition
const SpaceList = () => {
    const [ spaceDetails, setSpaceDetails ] = useState([])
    //     {
    //         id: 1,
    //         name: 'Fayetteville Public Library',
    //         city: 'Fayetteville',
    //         state: 'AR',
    //         description: 'A beautiful library with a coffee shop inside. Lots of seating and great views of the city.',
    //         photos: [faylib1, faylib2]
    //     },
    //     {
    //         id:2,
    //         name: 'Joe\'s cafe',
    //         city: 'Anchorage',
    //         state: 'AK',
    //         description: 'This coffee shop has a great atmosphere but is way too noisy.',
    //         photos: [coffee1]
    //     },
    //     {
    //         id: 3,
    //         name: 'The Holler',
    //         city: 'Bentonville',
    //         state: 'AR',
    //         description: 'This coffee shop has a great atmosphere but is way too noisy.',
    //         photos: [holler1]
    //     },
    //     {
    //         id: 4,
    //         name: 'Onyx Coffee Lab - Downtown Rogers',
    //         city: 'Rogers',
    //         state: 'AR',
    //         description: 'One of the coolest coffee shops I\'ve ever been in. Includes a bakery, a bar, and you can see the entire roasting operation. Plentiful seating (indoor and outdoor), though somewhat noisy.',
    //         photos: [onyx1]
    //     },
    //     {
    //         id: 5,
    //         name: 'Big Library',
    //         city: 'Anchorage',
    //         state: 'AK',
    //         description: 'Old library, great architectural style. Lot\'s of seating but can by noisy and has limited outlets for charging.',
    //         photos: [randlib1]
    //     },
    // ])

    useEffect(() => {
        SpacesDataService.getAllSpaces()
        .then(
            response => {
                setSpaceDetails(response.data)
            }
        )
    }, [])

    return (
        <Wrapper>
            <div>{spaceDetails.name}</div>
            <SpaceGrid>
            {spaceDetails.map(detail => (
                <SpaceCard key={detail.id} details={detail} />
            ))}
            </SpaceGrid>
        </Wrapper>
    )
}

export default SpaceList;
