// external dependencies
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import StarRatings from 'react-star-ratings';

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

const HeaderContainer = styled.div({
    display: 'flex',
    justifyContent: 'space-between',
    width: '500px',
    alignItems: 'center',
})

const A = styled.a({
    color: '#2456e0',
    textDecoration: 'none',
    marginRight: '0.2rem'
})

const I = styled.i({
    color: '#2456e0',
    marginRight: '0.2rem'
})

const Container = styled.div({
    display: 'flex',
    justifyContent: 'space-between',
    width: '48rem',
    alignItems: 'center',
})

const Location = styled.p({
    fontSize: '20px',
    margin: '0.25rem 0'
})

const PriceRange = styled.p({
    fontSize: '14px',
    marginRight: '1rem'
})

const Slider = styled.input({
    fontSize: '14px',
    width: '8rem'
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

const H4 = styled.h4({
    marginTop: '1rem'
})

const SmallRatingContainer = styled.div({
    display: 'flex',
    flexDirection: 'column',
    fontSize: '14px',
    margin: '0 0 0 2rem',
})

const Label = styled.label({
    margin: '0.25rem 0',
})

const SliderRatingContainer = styled.div({
    display: 'inline-flex',
})

const SliderRating = styled.p({
    fontSize: '10px',
    margin: '0.25rem 2.3rem 0 0',
})

// component definition
const DisplaySpacePage = (props) => {

    const [ spaceDetails, setSpaceDetails ] = useState({})

    useEffect(() => {
        SpacesDataService.getSpace(props.match.params.id)
        .then(
            response => {
                setSpaceDetails(response.data)
                console.log(response.data)
            }
        )
    }, [])

    return (
        <Wrapper>
            <Name>{spaceDetails.name}</Name>
            <HeaderContainer>
                <Location>{`${spaceDetails.city}, ${spaceDetails.state}`}</Location>
                {spaceDetails.webAddress &&
                    <A target="_blank" href={spaceDetails.webAddress}>Website <I className="fas fa-external-link-alt"></I></A>
                }
                <StarRatings
                    rating={spaceDetails.starRating}
                    starRatedColor="#f7bf23"
                    starHoverColor="#f7bf23"
                    starDimension="1.5rem"
                    starSpacing="0.25rem"
                    numberOfStars={5}
                    name='rating'
                />
            </HeaderContainer>
            <Photo src={spaceDetails.photo} alt={spaceDetails.name} />
            <Description>{spaceDetails.description}</Description>
            <H4>Ratings</H4>
            <Container>
                <PriceRange>{`Price Range: ${spaceDetails.priceRange}`}</PriceRange>
                <SmallRatingContainer>
                    <Label htmlFor="pluginAccess">Plugin Access</Label>
                    <SliderRatingContainer>
                        <SliderRating>poor</SliderRating><SliderRating>ok</SliderRating><SliderRating>great</SliderRating>
                    </SliderRatingContainer>
                    <Slider type="range" 
                        list="pluginAccess" 
                        name="pluginAccess"
                        min={0}
                        max={2}
                        step={1}
                        value={spaceDetails.pluginAccess} 
                    />
                    <datalist id="pluginAccess">
                        <option value="0"></option>
                        <option value="1"></option>
                        <option value="2"></option>
                    </datalist>
                </SmallRatingContainer>
                <SmallRatingContainer>
                    <Label htmlFor="noiseLevel">Noise Level</Label>
                    <SliderRatingContainer>
                        <SliderRating>loud</SliderRating><SliderRating>med</SliderRating><SliderRating>quiet</SliderRating>
                    </SliderRatingContainer>
                    <Slider type="range" 
                        list="noiseLevel" 
                        name="noiseLevel"
                        min={0}
                        max={2}
                        step={1}
                        value={spaceDetails.noiseLevel} 
                    />
                    <datalist id="noiseLevel">
                        <option value="0"></option>
                        <option value="1"></option>
                        <option value="2"></option>
                    </datalist>
                </SmallRatingContainer>
                <SmallRatingContainer>
                    <Label htmlFor="seating">Seating</Label>
                    <SliderRatingContainer>
                        <SliderRating>poor</SliderRating><SliderRating>ok</SliderRating><SliderRating>great</SliderRating>
                    </SliderRatingContainer>
                    <Slider type="range" 
                        list="seating" 
                        name="seating"
                        min={0}
                        max={2}
                        step={1}
                        value={spaceDetails.seating} 
                    />
                    <datalist id="seating">
                        <option value="0"></option>
                        <option value="1"></option>
                        <option value="2"></option>
                    </datalist>
                </SmallRatingContainer>
            </Container>
        </Wrapper>
    )
}

export default DisplaySpacePage;
