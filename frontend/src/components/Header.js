// external dependencies
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

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
    padding: '0 5px',
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
    padding: '0 10px',
    opacity: '40%',
    color: '#FFFFFF',
    ':hover': {
        opacity: '100%'
    },
    textDecoration: 'none',
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
const Header = () => {
    return (
        <Wrapper>
            <Brand><A href="/"><I className="fas fa-star-half-alt" />Third Rate</A></Brand>
            <Ul>
                {/* <Li><StyledLink className="link" to="/signup">Sign up</StyledLink></Li>
                <Li><StyledLink className="link" to="/login">Login</StyledLink></Li>
                <Li><StyledLink className="link" to="/logout">Logout</StyledLink></Li> */}
            </Ul>
        </Wrapper>
    )
}

export default withRouter(Header);
