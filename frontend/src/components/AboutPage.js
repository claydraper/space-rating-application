// external dependencies
import React from 'react';
import styled from 'styled-components';

// styled components
const Wrapper = styled.div({
    display: 'flex',
    flexDirection: 'column',
    height: '88%',
    alignItems: 'center',
    backgroundColor: '#EFF2F1',
})

const AboutCanvas = styled.div({
    display: 'flex',
    flexDirection: 'column',
    width: '60%',
    height: '100%',
    padding: '3rem 8rem',
    backgroundColor: '#DEE2DF',
    alignItems: 'center'
})

const Title = styled.h1({
    fontSize: '30px',
    alignSelf: 'flex-start'
})

const P = styled.p({
    fontSize: '18px',
    marginTop: '1rem'
})

const Hr = styled.hr({
    height: '1px',
    width: '100%',
    marginTop: '2rem'
})

// component definition
const AboutPage = () => {

    return (
        <Wrapper>
            <AboutCanvas>
                <Title>About Third Rate</Title>
                <P>
                    The purpose of Third Rate is to provide a resource for those of us who work remotely. Maybe you have an office, and maybe you enjoy
                    working from home, but sometimes you just need to go to a third space to focus and get things done. That's where Third Rate comes in. 
                </P>
                <P>
                    Here you will find spaces to work from, rated by fellow remote workers. The ratings are based on criteria specific to being able to focus and
                    work, not on food offerings, prices, etc (though, these may contribute to the overall rating). 
                </P>
                <Hr />
            </AboutCanvas>
        </Wrapper>
    )

}

export default AboutPage;
