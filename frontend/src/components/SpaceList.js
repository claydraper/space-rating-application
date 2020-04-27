// external dependencies
import React, {useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
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
    display: 'flex',
    flexDirection: 'column',
})

const SortContainer = styled.div({
    display: 'flex',
    justifyContent: 'center',
    margin: '-2rem 0 1rem 0',
    alignItems: 'center'
})

const SortButton = styled.button({
    width: '5rem',
    height: '1.25rem',
    marginLeft: '0.5rem',
    borderRadius: '5px',
    backgroundColor: '#1ca350',
    fontSize: '14px',
    outline: 'none',
    color: '#EFF2F1',
    border: '1px solid #000000',
    ':active': {
        backgroundColor: '#badbc8',
        color: '#07933E',
    }
})

const Select = styled.select({
    height: '1.25rem',
    fontSize: '14px',
    border: '1px solid #000000',
    color: '#000000',
    backgroundColor: '#EFF2F1',
    outline: 'none'
})

const SpaceGrid = styled.div({
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 20%)',
    justifyContent: 'space-around',
    margin: '3rem 5rem',
    rowGap: '2rem',
})

// component definition
const SpaceList = (props) => {
    const [ spaceDetails, setSpaceDetails ] = useState([])
    const [ sortCriteria, setSortCriteria ] = useState("")

    useEffect(() => {
        // if(document.URL === `http://thirdrate.s3-website.us-east-2.amazonaws.com/users/${sessionStorage.userID}`) {
        //     SpacesDataService.getAllUserSpaces(sessionStorage.userID)
        //     .then(
        //         response => {
        //             setSpaceDetails(response.data)
        //             console.log(response.data)
        //         }
        //     )
        // } else {
        //     SpacesDataService.getAllSpaces()
        //     .then(
        //         response => {
        //             setSpaceDetails(response.data)
        //             console.log(response.data)
        //         }
        //     )
        // }
        if(document.URL === `http://thirdrate.s3-website.us-east-2.amazonaws.com/`) {
            SpacesDataService.getAllSpaces()
            .then(
                response => {
                    setSpaceDetails(response.data)
                    console.log(response.data)
                }
            )
        } else {
            SpacesDataService.getAllUserSpaces(sessionStorage.userID)
            .then(
                response => {
                    setSpaceDetails(response.data)
                    console.log(response.data)
                }
            )
        }
    }, [])

    const handleSort = () => {
        let spaceDetailsCopy = [...spaceDetails]

        // sort by star rating, high to low
        if(sortCriteria === "overall") {
            let sortedArray = spaceDetailsCopy.sort((a, b) => {
                return b.starRating - a.starRating
            })
            setSpaceDetails(sortedArray)
        }

        //sort by name, a to z
        if(sortCriteria === "name") {
            let sortedArray = spaceDetailsCopy.sort((a, b) => {
                if (a.name.toUpperCase() < b.name.toUpperCase()) {
                    return -1
                }
                if (a.name.toUpperCase() > b.name.toUpperCase()) {
                    return 1
                }
                return 0
            })
            setSpaceDetails(sortedArray)
        }

        // sort by city, a to z
        if(sortCriteria === "city") {
            let sortedArray = spaceDetailsCopy.sort((a, b) => {
                if (a.city.toUpperCase() < b.city.toUpperCase()) {
                    return -1
                }
                if (a.city.toUpperCase() > b.city.toUpperCase()) {
                    return 1
                }
                return 0
            })
            setSpaceDetails(sortedArray)
        }
    }

    const handleChange = e => {
        setSortCriteria(e.target.value)
    }

    const handleDelete = (e, externalId, index) => {
        SpacesDataService.deleteSpace(externalId)
        const tempSpaceDetails = spaceDetails.filter(space =>  space.externalId !== spaceDetails[index].externalId)
        setSpaceDetails(tempSpaceDetails)
    }

    const handleUpdate = (e, externalId) => {
        props.history.push(`/spaces/${externalId}`)
    }

    return (
        <Wrapper>
            <SortContainer>
                <Select defaultValue="Sort by..." onChange={e => handleChange(e)}>
                    <option disabled>Sort by...</option>
                    <option value="overall">Overall Rating</option>
                    <option value="name">Name</option>
                    <option value="city">City</option>
                </Select>
                <SortButton onClick={e => {handleSort(e)}}>Sort</SortButton>
            </SortContainer>
            <SpaceGrid>
            {spaceDetails.map((detail, index) => (
                <SpaceCard key={detail.externalId} details={detail} index={index} handleDelete={handleDelete} handleUpdate={handleUpdate} />
            ))}
            </SpaceGrid>
        </Wrapper>
    )
}

export default withRouter(SpaceList);
