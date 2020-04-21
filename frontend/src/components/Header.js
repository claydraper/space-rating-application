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
    backgroundColor: '#323DC7',
    color: '#FFFFFF',
    paddingRight: '1rem'
})

const Brand = styled.div({
    padding: '0 1.5rem',
    fontSize: '22px',
})

const Ul = styled.ul({
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'flex-end',
})

const Li = styled.li({
    padding: '0 10px 0 0',
})

const StyledLink = styled(Link)({
    display: 'block',
    padding: '0 10px',
    color: '#FFFFFF',
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

const BrandIcon = styled.i({
    padding: '0 3px',
    fontSize: '22px',
})

const A = styled.a({
    textDecoration: 'none',
    color: '#FFFFFF'
})

const I = styled.i({
    fontSize: '14px',
    paddingRight: '0.25rem'
})

// component definition
const Header = (props) => {

    const handleLogout = () => {
        sessionStorage.clear()
        props.history.push("/")
    }

    return (
        <Wrapper>
            <Brand><A href="/"><BrandIcon className="fas fa-star-half-alt" />Third Rate</A></Brand>
            <Ul>
                {!sessionStorage.username && <Li><SignupModal><I className="fas fa-user-plus"></I>Sign up</SignupModal></Li>}
                {!sessionStorage.username && <Li><LoginModal><I className="fas fa-sign-in-alt"></I>Login</LoginModal></Li>}
                {sessionStorage.userID && <Li><StyledLink className="link" to={`/users/${sessionStorage.userID}`} ><I className="fas fa-user-circle"></I>My profile</StyledLink></Li>}
                {sessionStorage.username && <Li><StyledLink className="link" to="/" onClick={handleLogout}><I className="fas fa-sign-out-alt"></I>Logout</StyledLink></Li>}
            </Ul>
        </Wrapper>
    )
}

export default withRouter(Header);
