// external dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// styled components
const Wrapper = styled.div({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
})

const Img = styled.img({
    width: '270px',
    borderRadius: '3px',
    border: '2px solid ',
})

const Name = styled.h3({
    color: '#2456e0'
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
            <StyledLink to={`/spaces/${props.details.id}`} >
                <Img src={props.details.photos[0]} alt={props.details.description} />
                <Name>{props.details.name}</Name>
            </StyledLink>
            <Location>{`${props.details.city}, ${props.details.state}`}</Location>
        </Wrapper>
    )
}

export default SpaceCard;
