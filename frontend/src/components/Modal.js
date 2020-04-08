// external dependencies
import React from 'react';
import Popup from 'reactjs-popup';
import styled from 'styled-components';

// styled components
const StyledPopup = styled(Popup)({

})

const contentStyles = {
    width: '25%',
    borderRadius: '5px',
    padding: '0'
}

const Text = styled.p({
    padding: '0 10px',
    opacity: '40%',
    color: '#FFFFFF',
    ':hover': {
        opacity: '100%',
        cursor: 'pointer',
    },
})

const Wrapper = styled.div({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
})

const Form = styled.form({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
})

const Title = styled.h2({
    color: 'black',
    margin: '1rem 0 0.5rem 0',
})

const Container = styled.div({
    display: 'flex',
    flexDirection: 'column',
    margin: '0.5rem 0',
    width: '65%'
})

const Input = styled.input({
    height: '40px',
    fontSize: '16px',
    borderRadius: '5px',
    outline: 'none',
    border: '1px solid #8a8a8a',
    paddingLeft: '0.25rem'
})

const Label = styled.label({
    fontSize: '18px',
    fontWeight: '600',
    color: 'black',
    margin: '0.25rem 0'
})

const Submit = styled.button({
    margin: '2rem 0',
    width: '65%',
    height: '40px',
    borderRadius: '5px',
    color: '#FFFFFF',
    backgroundColor: '#2456e0',
    fontSize: '16px'
})

// component definition
const Modal = (props) => (
    <StyledPopup
        className="styledPopup"
        trigger={<Text className="clickp">{props.children}</Text>}
        modal
        closeOnDocumentClick
        contentStyle={contentStyles}
    >
        <Wrapper>
            <Form>
                <Title>Sign up</Title>
                <Container>
                    <Label htmlFor="firstName">First name</Label>
                    <Input name="firstName" type="text" />
                </Container>
                <Container>
                    <Label htmlFor="lastName">Last name</Label>
                    <Input name="lastName" type="text" />
                </Container>
                <Container>
                    <Label htmlFor="email">Email</Label>
                    <Input name="email" type="email" />
                </Container>
                <Container>
                    <Label htmlFor="password">Password</Label>
                    <Input name="password" type="password" />
                </Container>
                <Submit type="submit">Submit</Submit>
            </Form>
        </Wrapper>
    </StyledPopup>
)

export default Modal;
