// external dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// styled components
const Wrapper = styled.div({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    backgroundColor: '#262ea3',
    color: '#FFFFFF',
    height: '6rem',
    bottom: 0,
    paddingLeft: '1rem',
    alignItems: 'center'
})

const Container = styled.div({
    display: 'flex',
    flexDirection: 'column',
    height: '5rem',
    marginLeft: '2rem',
    justifyContent: 'center',
    marginTop: '1rem'
})

const LinkContainer = styled.div({
    display: 'flex',
    height: '2rem'
})

const StyledLink = styled(Link)({
    color: '#FFFFFF',
    textDecoration: 'none',
    fontSize: '13px',
    height: '2rem'
})

const FooterHeading = styled.p({
    fontSize: '16px',
    height: '2rem'
})

const A = styled.a({
    color: '#FFFFFF',
    height: '1rem',
    marginRight: '0.3rem'

})

const I = styled.i({
    color: '#FFFFFF',
    fontSize: '20px',
})

// component definition
const Footer = () => {

    return (
        <Wrapper>
            <Container>
            <FooterHeading>About</FooterHeading>
            <StyledLink to="/about">What is Third Rate</StyledLink>
            </Container>
            <Container>
                <FooterHeading>Follow</FooterHeading>
                <LinkContainer>
                <A target="_blank" href="https://github.com/cddraper"><I className="fab fa-github-square"></I></A>
                <A target="_blank" href="https://www.linkedin.com/in/claydraper/"><I className="fab fa-linkedin"></I></A>
                <A target="_blank" href="https://twitter.com/ClayDraper"><I className="fab fa-twitter-square"></I></A>
                </LinkContainer>
            </Container>
            <Container>
                <FooterHeading>{`Copyright ${String.fromCharCode(169)} 2020 Third Rate`}</FooterHeading>
            </Container>
        </Wrapper>
    )
}

export default Footer;
