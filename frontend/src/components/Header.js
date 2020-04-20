// external dependencies
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

// internal dependencies
import SignupModal from './SignupModal';
import LoginModal from './LoginModal';

// styled components
const Wrapper = styled.div({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    top: 0,
    width: '100vw',
    height: '60px',
    alignItems: 'center',
    backgroundColor: '#33333D',
    color: '#FFFFFF',
})

const Brand = styled.div({
    padding: '0 1.5rem',
    fontSize: '22px'
})

const Ul = styled.ul({
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'flex-end',
})

const Li = styled.li({
    padding: '0 10px',
    opacity: '60%',
    ':hover': {
        opacity: '100%'
    }
})

const StyledLink = styled(Link)({
    display: 'block',
    padding: '0 10px',
    opacity: '40%',
    color: '#FFFFFF',
    ':hover': {
        opacity: '100%'
    },
    textDecoration: 'none',

    '::after': {
        content: '""',
        height: '2px',
        width: '100%',
        background: 'white',
        display: 'block',
        marginTop: '4px',
        visibility: 'hidden',
        transform: 'scaleX(0)',
        transition: '0.3s',
    },

    '&:hover::after': {
        content: '""',
        height: '2px',
        width: '100%',
        background: 'white',
        display: 'block',
        marginTop: '4px',
        transform: 'scaleX(1)',
        visibility: 'visible',
    },
})

const I = styled.i({
    padding: '0 3px',
    fontSize: '22px',
})

const A = styled.a({
    textDecoration: 'none',
    color: '#FFFFFF'
})

// component definition
const Header = (props) => {

    const handleLogout = () => {
        sessionStorage.clear()
        props.history.push("/")
    }

    return (
        <Wrapper>
            <Brand><A href="/"><I className="fas fa-star-half-alt" />Third Rate</A></Brand>
            <Ul>
                {!sessionStorage.username && <Li><SignupModal>Sign up</SignupModal></Li>}
                {!sessionStorage.username && <Li><LoginModal>Login</LoginModal></Li>}
                {sessionStorage.userID && <Li><StyledLink className="link" to={`/users/${sessionStorage.userID}`} >My profile</StyledLink></Li>}
                {sessionStorage.username && <Li><StyledLink className="link" to="/" onClick={handleLogout}>Logout</StyledLink></Li>}
            </Ul>
        </Wrapper>
    )
}

export default withRouter(Header);
