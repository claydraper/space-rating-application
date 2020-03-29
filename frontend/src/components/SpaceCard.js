// external dependencies
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// internal dependencies
import SpacesDataService from '../apis/spaces/SpacesDataService';

// styled components
const Wrapper = styled.div({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
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
    textShadow: '1px 1px black',
    ':hover': {
        color: '#f2df6f',
        cursor: 'pointer'
    }
})

const Delete = styled.i({
    color: '#a8a8a8',
    padding: '0 2px',
    textShadow: '1px 1px black',
    ':hover': {
        color: '#d63838',
        cursor: 'pointer'
    }
})

const Img = styled.img({
    width: '100%',
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

    const handleUpdate = () => {
        // props.history.push(`/users/${props.details.id}`)
        console.log(props.details)
    }

    return (
        <Wrapper>
            <IWrap>
                <Edit onClick={handleUpdate} className="fas fa-edit"></Edit>
                <Delete onClick={(e) => props.handleDelete(e, props.details.externalId, props.index)} className="fas fa-trash-alt"></Delete>
            </IWrap>
            <StyledLink to={`/spaces/${props.details.id}`} >
                <Img src={props.details.photo} alt={props.details.name} />
                <Name>{props.details.name}</Name>
            </StyledLink>
            <Location>{`${props.details.city}, ${props.details.state}`}</Location>
        </Wrapper>
    )
}

export default SpaceCard;
