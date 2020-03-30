// external dependencies
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// internal dependencies
import SpacesDataService from '../apis/spaces/SpacesDataService';

// styled components
const Wrapper = styled.div({
    display: 'flex',
    flexDirection: 'column',
    height: '88%',
    maxWidth: '100vw',
    alignItems: 'center',
    fontFamily: 'raleway',
})

const Title = styled.h2({

})

const Form = styled.form({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: '80%',
    maxHeight: '550px',
    marginTop: '1rem',
})

const Container = styled.div({
    display: 'flex',
    flexDirection: 'column',
})

const Label = styled.label({
    margin: '0.25rem 0',
    fontWeight: 600,
})

const DescInput = styled.textarea({
    fontSize: '14px',
    outline: 'none',
    resize: 'none',
    border: '1px solid #8a8a8a',
    borderRadius: '3px',
})

const Input = styled.input({
    outline: 'none',
    width: '30%',
    fontSize: '14px',
    border: '1px solid #8a8a8a',
    borderRadius: '3px',
})

const Select = styled.select({
    outline: 'none',
    width: '18%',
    border: '1px solid #8a8a8a',
})

const PhotoInput = styled.input({
    outline: 'none',
    width: '30%',
    fontSize: '14px',
    border: '1px solid #8a8a8a',
    borderRadius: '3px',
})

const Submit = styled.button({
    width: '18%',
    padding: '0.25rem 0',
    borderRadius: '3px',
    color: '#FFFFFF',
    backgroundColor: '#2456e0',
    outline: 'none',
    ':hover': {
        cursor: 'pointer',
    },
    ':active': {
        color: '#2456e0',
        backgroundColor: '#a1bbe6'
    },
})

// component definition
const CreateSpacePage = (props) => {

    const [spaceDetails, setSpaceDetails] = useState({
        name: null,
        city: null,
        state: null,
        description: null,
        photo: null,
    })

    useEffect(() => {
        if (props.match.params.id === "new") {
            return
        }
        SpacesDataService.getSpace(props.match.params.id)
            .then(
                response => {
                    setSpaceDetails({
                        name: response.data.name,
                        city: response.data.city,
                        state: response.data.state,
                        description: response.data.description,
                        photo: response.data.photo,
                    })
                }
            )
    }, [props.match.params.id])

    const handleChange = (e) => {
        setSpaceDetails({
            ...spaceDetails, [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (props.match.params.id === "new") {
            SpacesDataService.createSpace({
                name: spaceDetails.name,
                city: spaceDetails.city,
                state: spaceDetails.state,
                description: spaceDetails.description,
                photo: spaceDetails.photo
            }).then(() => {
                props.history.push("/", { successfulSubmit: true })

                let timeout = window.setTimeout(() => {
                    props.history.replace("/", { successfulSubmit: false })
                }, 2000)

                window.onclick = () => {
                    clearTimeout(timeout)
                }
            })
        } else {
            SpacesDataService.updateSpace(props.match.params.id, {
                name: spaceDetails.name,
                city: spaceDetails.city,
                state: spaceDetails.state,
                description: spaceDetails.description,
                photo: spaceDetails.photo
            }).then(() => {
                props.history.push("/", { successfulUpdate: true })

                let timeout = window.setTimeout(() => {
                    props.history.replace("/", { successfulUpdate: false })
                }, 2000)

                window.onclick = () => {
                    clearTimeout(timeout)
                }
            })
        }
    }


    return (
        <>
            <Wrapper>
                <Form onSubmit={(e) => handleSubmit(e)} >
                    {props.match.params.id !== "new" && <Title>Edit space</Title>}
                    {props.match.params.id === "new" && <Title>Create a new space</Title>}
                    <Container>
                        <Label htmlFor="name">Name</Label>
                        <Input onChange={(e) => handleChange(e)} type="text" name="name" value={spaceDetails.name || ""} />
                    </Container>
                    <Container>
                        <Label htmlFor="city" >City</Label>
                        <Input onChange={(e) => handleChange(e)} type="text" name="city" value={spaceDetails.city || ""} />
                    </Container>
                    <Container>
                        <Label htmlFor="state" >State</Label>
                        <Select onChange={(e) => handleChange(e)} name="state" value={spaceDetails.state || ""}>
                            <option value="default selected">-- select --</option>
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                            <option value="AZ">Arizona</option>
                            <option value="AR">Arkansas</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                            <option value="CT">Connecticut</option>
                            <option value="DE">Delaware</option>
                            <option value="DC">District Of Columbia</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="HI">Hawaii</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                            <option value="IA">Iowa</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="ME">Maine</option>
                            <option value="MD">Maryland</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MI">Michigan</option>
                            <option value="MN">Minnesota</option>
                            <option value="MS">Mississippi</option>
                            <option value="MO">Missouri</option>
                            <option value="MT">Montana</option>
                            <option value="NE">Nebraska</option>
                            <option value="NV">Nevada</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NM">New Mexico</option>
                            <option value="NY">New York</option>
                            <option value="NC">North Carolina</option>
                            <option value="ND">North Dakota</option>
                            <option value="OH">Ohio</option>
                            <option value="OK">Oklahoma</option>
                            <option value="OR">Oregon</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option value="TX">Texas</option>
                            <option value="UT">Utah</option>
                            <option value="VT">Vermont</option>
                            <option value="VA">Virginia</option>
                            <option value="WA">Washington</option>
                            <option value="WV">West Virginia</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WY">Wyoming</option>
                        </Select>
                    </Container>
                    <Container>
                        <Label htmlFor="description" >Description</Label>
                        <DescInput
                            onChange={(e) => handleChange(e)}
                            placeholder="Enter between 10 and 300 characters"
                            minlength={10} maxlength={300} rows={4} cols={100}
                            wrap="hard" name="description" value={spaceDetails.description || ""}
                        />
                    </Container>
                    <Container>
                        <Label htmlFor="photo" >Photo URL</Label>
                        <PhotoInput onChange={(e) => handleChange(e)} type="url" name="photo" value={spaceDetails.photo || ""} />
                    </Container>
                    <Submit type="submit">Submit</Submit>
                </Form>
            </Wrapper>
        </>
    )
}

export default CreateSpacePage;
