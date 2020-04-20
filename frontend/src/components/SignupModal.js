// external dependencies
import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Popup from 'reactjs-popup';
import styled from 'styled-components';

// internal dependencies
import UsersDataService from '../apis/users/UsersDataService';
import AuthenticationService from './AuthenticationService';

// styled components
const StyledPopup = styled(Popup)(props => ({
    
}))

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
    fontSize: '16px',
    outline: 'none',
    ':active': {
        backgroundColor: '#a1bbe6',
        color: '#2456e0',
    }
})

const GenAlert = styled.div({
    display: 'flex',
    height: '1.1rem',
    color: '#a12020',
    backgroundColor: '#fac5c5',
    top: '7rem',
    fontSize: '12px',
    padding: '0.1rem 0.5rem',
    borderRadius: '3px'
})

// component definition
const SignupModal = (props) => {

    const [userDetails, setUserDetails] = useState({
        firstName: null,
        lastName: null,
        email: null,
        password: null
    })
    const [showPopup, setShowPopup] = useState(true)
    const [errorMessage, setErrorMessage] = useState()

    const handleChange = e => {
        setUserDetails({
            ...userDetails, [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        UsersDataService.createUser({
            firstName: userDetails.firstName,
            lastName: userDetails.lastName,
            email: userDetails.email,
            password: userDetails.password
        }).then(() => {
            setShowPopup(false)
            props.history.push("/")
            setTimeout(() => {
                UsersDataService.userLogin({
                    email: userDetails.email,
                    password: userDetails.password
                })
                .then(response => {
                AuthenticationService.registerLogin(response.headers.authorization, response.headers.username, response.headers.userid, response.headers.firstname)
                props.history.push(`/users/${response.headers.userid}`)
                })
            }, 0)
        }).catch(error => {
            console.log(error.response)
            setErrorMessage("There is an existing account for that email address")
        })
    }

    return (
        <StyledPopup
            showPopup={showPopup}
            className="styledPopup"
            trigger={<Text>{props.children}</Text>}
            modal
            closeOnDocumentClick
            contentStyle={contentStyles}
            overlayStyle={{'display': showPopup? 'flex' : 'none'}}
        >
            <Wrapper>
                <Form onSubmit={e => handleSubmit(e)}>
                    <Title>Sign up</Title>
                    {errorMessage && <GenAlert>{errorMessage}</GenAlert>}
                    <Container>
                        <Label htmlFor="firstName">First name</Label>
                        <Input name="firstName" type="text" value={userDetails.firstName || ""} onChange={e => handleChange(e)} />
                    </Container>
                    <Container>
                        <Label htmlFor="lastName">Last name</Label>
                        <Input name="lastName" type="text" value={userDetails.lastName || ""} onChange={e => handleChange(e)} />
                    </Container>
                    <Container>
                        <Label htmlFor="email">Email</Label>
                        <Input name="email" type="email" value={userDetails.email || ""} onChange={e => handleChange(e)} />
                    </Container>
                    <Container>
                        <Label htmlFor="password">Password</Label>
                        <Input name="password" type="password" value={userDetails.password || ""} onChange={e => handleChange(e)} />
                    </Container>
                    <Submit type="submit">Submit</Submit>
                </Form>
            </Wrapper>
        </StyledPopup>
    )
}

export default withRouter(SignupModal);
