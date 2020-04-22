// external dependencies
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import StarRatings from 'react-star-ratings';

// styled components
const Wrapper = styled.div({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
})

const Container = styled.div({
    alignSelf: 'flex-end'
})

const IWrap = styled.div({
    position: 'relative',
    top: '26px',
    right: '8px',
    alignSelf: 'flex-end',
    fontSize: '18px',
})

const Edit = styled.i({
    color: '#a8a8a8',
    padding: '0 2px',
    textShadow: '1px 1px 1px black',
    ':hover': {
        color: '#FFD884',
        cursor: 'pointer'
    }
})

const Delete = styled.i({
    color: '#a8a8a8',
    padding: '0 2px',
    textShadow: '1px 1px 1px black',
    ':hover': {
        color: '#F45B69',
        cursor: 'pointer'
    }
})

const Img = styled.img({
    width: '100%',
    borderRadius: '3px',
    border: '2px solid ',
    maxHeight: '210px'
})

const Name = styled.h3({
    color: '#3945e3'
})

const Location = styled.p({
    
})

const StyledLink = styled(Link)({
    textDecoration: 'none',
    color: 'black',
})

// component definition
const SpaceCard = (props) => {

    return (
        <Wrapper>
            {document.URL !== `http://localhost:3000/users/${sessionStorage.userID}` &&
            <Container>
            <StarRatings
                rating={props.details.starRating}
                starRatedColor="#F9CB40"
                starHoverColor="#F9CB40"
                starDimension="1.5rem"
                starSpacing="0.25rem"
                numberOfStars={5}
                name='rating'
            />
            </Container>}
            <IWrap>
                {document.URL === `http://localhost:3000/users/${sessionStorage.userID}` && <Edit onClick={(e) => props.handleUpdate(e, props.details.externalId)} className="fas fa-edit"></Edit>}
                {document.URL === `http://localhost:3000/users/${sessionStorage.userID}` && <Delete onClick={(e) => props.handleDelete(e, props.details.externalId, props.index)} className="fas fa-trash-alt"></Delete>}
            </IWrap>
            <StyledLink to={`/spaces/view/${props.details.externalId}`} >
                <Img src={props.details.photos[0]} alt={props.details.name} />
                <Name>{props.details.name}</Name>
            </StyledLink>
            <Location>{`${props.details.city}, ${props.details.state}`}</Location>
        </Wrapper>
    )
}

export default SpaceCard;
