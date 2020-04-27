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
    backgroundColor: '#EFF2F1',
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

const PhotosContainer = styled.div({
    display: "flex",
})

const Carousel = styled.div({
    display: 'flex',
    alignItems: 'center',
    margin: '0 0.75rem',
    height: '380px'
})

const Photo = styled.img({
    width: '500px',
    border: '2px solid black',
    borderRadius: '3px',
    minHeight: '360px',
    maxHeight: '380px',
})

const LeftArrow = styled.i({
    fontSize: '28px',
    marginRight: '-2.5rem',
    zIndex: 1,
    color: '#a1beed',
    textShadow: '1px 1px 8px #3b3b3a',
    opacity: '60%',
    ':hover': {
        opacity: '100%',
        cursor: 'pointer'
    }
})

const RightArrow = styled.i({
    fontSize: '28px',
    marginLeft: '-2.5rem',
    zIndex: 1,
    color: '#a1beed',
    textShadow: '1px 1px 8px #3b3b3a',
    opacity: '60%',
    ':hover': {
        opacity: '100%',
        cursor: 'pointer'
    }
})

const PhotoAlbum = styled.div({
    display: 'grid',
    alignSelf: 'center',
    gridTemplateColumns: 'repeat(4, 250px)',
    gridTemplateRows: 'repeat(2, 160px)',
    alignItems: 'space-between',
    marginLeft: '1rem',
})

const SmallPhoto = styled.img({
    height: '160px',
    width: '250px',
    border: '1px solid black'
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
    const [ displayedPhoto, setDisplayedPhoto ] = useState(0)

    useEffect(() => {
        SpacesDataService.getSpace(props.match.params.id)
        .then(
            response => {
                setSpaceDetails(response.data)
                // console.log("spacedetails: ", response.data)
            }
        )
    }, [])

    const leftClick = e => {
        setDisplayedPhoto(displayedPhoto !== 0 ? displayedPhoto - 1 : spaceDetails.photos.length - 1)
    }

    const rightClick = e => {
        setDisplayedPhoto(displayedPhoto < spaceDetails.photos.length - 1 ? displayedPhoto + 1 : 0)
    }

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
                    starRatedColor="#F9CB40"
                    starHoverColor="#F9CB40"
                    starDimension="1.5rem"
                    starSpacing="0.25rem"
                    numberOfStars={5}
                    name='rating'
                />
            </HeaderContainer>
            <PhotosContainer>
                <Carousel>
                    <LeftArrow className="fas fa-arrow-alt-circle-left" onClick={e => leftClick(e)}></LeftArrow>
                    <Photo src={spaceDetails.photos ? spaceDetails.photos[displayedPhoto] :  ""} alt={spaceDetails.name} />
                    <RightArrow className="fas fa-arrow-alt-circle-right" onClick={e => rightClick(e)}></RightArrow>
                </Carousel>
                <PhotoAlbum>
                    {spaceDetails.photos ? spaceDetails.photos.filter( (photo, i) => (i > 0 && i < 9)).map( (photo, i) => 
                        <SmallPhoto src={spaceDetails.photos[i + 1]} alt={spaceDetails.photos[i + 1]} key={i + 1}/>
                    ) : ""}
                </PhotoAlbum>
            </PhotosContainer>
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
                        readOnly
                        min={0}
                        max={2}
                        step={1}
                        value={spaceDetails.pluginAccess || ""} 
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
                        readOnly
                        min={0}
                        max={2}
                        step={1}
                        value={spaceDetails.noiseLevel || ""} 
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
                        readOnly
                        min={0}
                        max={2}
                        step={1}
                        value={spaceDetails.seating || ""} 
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
