// external dependencies
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import StarRatings from 'react-star-ratings';
import { CircularProgress } from '@material-ui/core';
import axios from 'axios';

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
    backgroundColor: '#EFF2F1',
})

const Title = styled.h2({
    marginBottom: '1rem',
    fontSize: '22px'
})

const Form = styled.form({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: '100%',
    width: '50%',
    maxHeight: '650px',
    marginTop: '2rem',
})

const Container = styled.div({
    display: 'flex',
    flexDirection: 'column',
    margin: '0.25rem 0',
})

const DescAlert = styled.div({
    display: 'flex',
    height: '1.1rem',
    color: '#a12020',
    backgroundColor: '#fac5c5',
    position: 'absolute',
    top: '31.5rem',
    fontSize: '12px',
    padding: '0.1rem 0.5rem',
    borderRadius: '3px'
})

const GenAlert = styled.div({
    display: 'flex',
    height: '1.1rem',
    color: '#a12020',
    backgroundColor: '#fac5c5',
    position: 'absolute',
    top: '7rem',
    fontSize: '12px',
    padding: '0.1rem 0.5rem',
    borderRadius: '3px'
})

const UploadAlert = styled.div({
    display: 'flex',
    height: '1.1rem',
    color: '#a12020',
    backgroundColor: '#fac5c5',
    position: 'absolute',
    top: '7rem',
    fontSize: '12px',
    padding: '0.1rem 0.5rem',
    borderRadius: '3px'
})

const Asterisk = styled.p({
    fontSize: '40px',
    margin: '-0.35rem 0.25rem 0.25rem 0.25rem'
})

const Label = styled.label({
    margin: '0.25rem 0',
    fontWeight: 600,
})

const InlineContainer = styled.div({
    display: 'flex',
})

const RatingContainer = styled.div({
    display: 'inline-flex',
    fontSize: '14px',
    alignItems: 'center',
    margin: '0.75rem 0 0 0',
})

const SmallRatingContainer = styled.div({
    display: 'flex',
    flexDirection: 'column',
    fontSize: '14px',
    margin: '0 0 0 3rem',
})

const SliderRatingContainer = styled.div({
    display: 'inline-flex',
})

const SliderRating = styled.p({
    fontSize: '10px',
    margin: '0.25rem 2.3rem 0 0',
})

const CharCounter = styled.p(props => ({
    fontSize: '12px',
    margin: '0.5rem 0 0 0.75rem',
    color: (props.count === 0) ? 'red' : 'black',
}))

const DescInput = styled.textarea({
    fontSize: '14px',
    outline: 'none',
    resize: 'none',
    border: '1px solid #8a8a8a',
    borderRadius: '3px',
    padding: '0.1rem'
})

const Input = styled.input({
    outline: 'none',
    width: '30%',
    fontSize: '14px',
    border: '1px solid #8a8a8a',
    borderRadius: '3px',
    padding: '0.1rem'
})

const Slider = styled.input({
    fontSize: '14px',
    width: '8rem',
})

const StateSelect = styled.select({
    outline: 'none',
    width: '18%',
    border: '1px solid #8a8a8a',
    backgroundColor: '#FFFFFF',
})

const PriceSelect = styled.select({
    outline: 'none',
    width: '5rem',
    border: '1px solid #8a8a8a',
    marginLeft: '0.5rem',
    backgroundColor: '#FFFFFF'
})

const PriceContainer = styled.div({
    fontSize: '14px',
    width: '11rem',
    margin: '0.25rem 0',
})

const BrowseLabel = styled.label({
    fontSize: '12px',
    cursor: 'pointer',
    border: '1px solid #323DC7',
    color: '#323DC7',
    backgroundColor: '#FFFFFF',
    width: '5rem',
    borderRadius: '5px',
    textAlign: 'center',
    height: '1.1rem',
    lineHeight: '1.1rem',
    ':active': {
        backgroundColor: '#323DC7',
        color: '#FFFFFF',
        border: '1px solid #FFFFFF'
    }
})

const Browse = styled.input({
    outline: 'none',
    width: '0.1px',
	height: '0.1px',
	opacity: '0',
	overflow: 'hidden',
	position: 'absolute',
	zIndex: '-1',
})

const Upload = styled.button({
    outline: 'none',
    width: '5rem',
    height: '1.1rem',
    borderRadius: '5px',
    fontSize: '12px',
    border: '1px solid #07933E',
    color: '#07933E',
    backgroundColor: '#FFFFFF',
    ':active': {
        backgroundColor: '#07933E',
        color: '#FFFFFF',
        border: '1px solid #FFFFFF'
    }
})

const ButtonContainer = styled.div({
    display: 'flex',
    flexDirection: 'column',
    height: '2.75rem',
    justifyContent: 'space-around'
})

const PhotoStatusText = styled.p({
    fontSize: '11px',
    marginLeft: '0.5rem',
    alignSelf: 'center'
})

const I = styled.i({
    fontSize: '11px',
    marginLeft: '0.25rem',
})

const StyledCircularProgress = styled(CircularProgress)({
    alignSelf: 'center',
    marginLeft: '1rem'
})

const Submit = styled.button({
    width: '15%',
    marginTop: '1rem',
    padding: '0.25rem 0',
    borderRadius: '3px',
    color: '#EFF2F1',
    fontWeight: '600',
    fontSize: '12px',
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

const StyledStarRatings = styled(StarRatings)({

})

// component definition
const ManageSpacePage = (props) => {

    // initial state
    const [spaceDetails, setSpaceDetails] = useState({
        name: null,
        city: null,
        state: null,
        webAddress: null,
        priceRange: null,
        pluginAccess: 1,
        noiseLevel: 1,
        seating: 1,
        description: "",
        photos: [],
    })

    // stores url address for uploaded photos
    const [imgbbAddress, setImgbbAddress] = useState([])

    const [starRating, setStarRating] = useState(0)

    // for description field chars remaining
    const [counter, setCounter] = useState({
        descriptionCounter: 300,
        fileCounter: false
    })

    const [errorTimer, setErrorTimer] = useState({
        verifyLength: false,
        errorTimeout: false
    })
    const [errorMessage, setErrorMessage] = useState("")

    // for upload spinner and message
    const [uploadStatus, setUploadStatus] = useState(false)
    const [uploadMessage, setUploadMessage] = useState(null)


    // detects whether user is creating a new space or updating an existing space and populates form accordingly
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
                        webAddress: response.data.webAddress,
                        priceRange: response.data.priceRange,
                        pluginAccess: response.data.pluginAccess,
                        noiseLevel: response.data.noiseLevel,
                        seating: response.data.seating,
                    })
                    console.log("photos: ", response.data.photos)
                    setStarRating(response.data.starRating)
                    setCounter({descriptionCounter: 300 - response.data.description.length})
                }
            )
    }, [props.match.params.id])

    // to continually rerender the description counter after initial page load
    useEffect(() => {
        setCounter({descriptionCounter: 300 - spaceDetails.description.length})
    }, [spaceDetails.description.length])


    // event handlers
    const handleChange = e => {
        setSpaceDetails({
            ...spaceDetails, [e.target.name]: e.target.value
        })
        // if (e.target.name === "description") {
        //     setCounter({...counter, descriptionCounter: 300 - spaceDetails.description.length})
        // }
    }

    const handleImageChange = e => {
        setSpaceDetails({ ...spaceDetails, photos: e.target.files })
        setCounter({fileCounter: e.target.files.length})
        console.log(counter.fileCounter)
    };

    // photos upload to imgbb api and return image address
    const handleUpload = () => {
            const photoArray = [...spaceDetails.photos]
            setUploadStatus("uploading")
            photoArray.forEach((photo, i) => {
                let form_data = new FormData();
                form_data.append('image', spaceDetails.photos[i]);
                const url = 'https://api.imgbb.com/1/upload?key=58f16ec516b4dda1a0487000e8f02b5c';
                axios.post(url, form_data, {
                    headers: {
                        'content-type': 'multipart/form-data'
                    }
                })
                .then(response => {
                    setImgbbAddress([...imgbbAddress], imgbbAddress.push(response.data.data.url))
                    console.log(`imgbbaddress ${i}`, imgbbAddress)
                    if ( i === (photoArray.length - 1)) {
                        setTimeout( () => { // workaround to allow time for api response before setting state
                            setImgbbAddress([...imgbbAddress])
                            console.log("final state: :", imgbbAddress)
                            setUploadStatus("complete")
                            setUploadMessage(null)
                        }, 1000)
                    }
                })
                .catch(error => {
                    console.log(`imgbb error: ${i}`, error.response)
                })
            })
    }

    // prevents typing beyond character limit in description text area
    const handleKeyDown = e => {
        if (e.target.value.length >= 300) {
            if ((e.keyCode >= 48 && e.keyCode <= 90) || (e.keyCode >= 96 && e.keyCode <= 111) || (e.keyCode >= 186 && e.keyCode <= 222)) {
                e.preventDefault()
            }
        }
    }

    const handlePaste = e => { 
        e.preventDefault()
        const pasteValue = e.clipboardData.getData('text/plain').slice(0, 300 - e.target.value.length)
        console.log(pasteValue)
        const newDescription = spaceDetails.description + pasteValue
        setSpaceDetails({...spaceDetails, description: newDescription})
        setCounter({...counter, descriptionCounter: 300 - newDescription.length})
    }

    // sets the star rating
    const changeRating = (newRating, name) => {
        setStarRating(newRating)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (spaceDetails.description && spaceDetails.description.length < 10) {
            setErrorTimer({ verifyLength: true })
            let timeout = window.setTimeout(() => {
                setErrorTimer({ verifyLength: false })
            }, 3000)

            window.onclick = () => {
                clearTimeout(timeout)
                setErrorTimer({ verifyLength: false })
            }
            return
        }

        // prevent submit if photos still uploading
        if (uploadStatus === "uploading") {
            setUploadMessage("Please wait until photos are finished uploading before submitting")
            return
        }

        // handles update of new spaces
        if (props.match.params.id === "new") {
            SpacesDataService.createSpace({
                name: spaceDetails.name,
                city: spaceDetails.city,
                state: spaceDetails.state,
                description: spaceDetails.description,
                photos: imgbbAddress,
                webAddress: spaceDetails.webAddress,
                priceRange: spaceDetails.priceRange,
                pluginAccess: spaceDetails.pluginAccess,
                noiseLevel: spaceDetails.noiseLevel,
                seating: spaceDetails.seating,
                userId: sessionStorage.userID,
                starRating: starRating
            }).then(() => {
                props.history.push(`/users/${sessionStorage.userID}`, { successfulSubmit: true })

                let timeout = window.setTimeout(() => {
                    props.history.replace(`/users/${sessionStorage.userID}`, { successfulSubmit: false })
                }, 3000)

                window.onclick = () => {
                    clearTimeout(timeout)
                }
            }).catch(error => {
                setErrorTimer({ errorTimeout: true })

                let timeout = window.setTimeout(() => {
                    setErrorTimer({ errorTimeout: false })
                }, 3000)

                window.onclick = () => {
                    clearTimeout(timeout)
                    setErrorTimer({ errorTimeout: false })
                }
            })
        // handles update of existing spaces
        } else {
            SpacesDataService.updateSpace(props.match.params.id, {
                name: spaceDetails.name,
                city: spaceDetails.city,
                state: spaceDetails.state,
                description: spaceDetails.description,
                photos: imgbbAddress,
                webAddress: spaceDetails.webAddress,
                priceRange: spaceDetails.priceRange,
                pluginAccess: spaceDetails.pluginAccess,
                noiseLevel: spaceDetails.noiseLevel,
                seating: spaceDetails.seating,
                userId: sessionStorage.userID,
                starRating: starRating
            }).then(() => {
                props.history.push(`/users/${sessionStorage.userID}`, { successfulUpdate: true })
                let timeout = window.setTimeout(() => {
                    props.history.replace(`/users/${sessionStorage.userID}`, { successfulUpdate: false })
                }, 3000)

                window.onclick = () => {
                    clearTimeout(timeout)
                }
            }).catch(error => {
                setErrorMessage(error.response.data.message)
                setErrorTimer({ errorTimeout: true })

                let timeout = window.setTimeout(() => {
                    setErrorTimer({ errorTimeout: false })
                }, 3000)

                window.onclick = () => {
                    clearTimeout(timeout)
                    setErrorTimer({ errorTimeout: false })
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
                    {uploadStatus && uploadMessage && <UploadAlert>{uploadMessage}</UploadAlert>}
                    {errorTimer.errorTimeout && <GenAlert >Fields marked with <Asterisk>*</Asterisk> are required</GenAlert>}
                    <Container>
                        <Label htmlFor="name">Name*</Label>
                        <Input onChange={(e) => handleChange(e)} type="text" name="name" value={spaceDetails.name || ""} />
                    </Container>
                    <Container>
                        <Label htmlFor="city" >City*</Label>
                        <Input onChange={(e) => handleChange(e)} type="text" name="city" value={spaceDetails.city || ""} />
                    </Container>
                    <Container>
                        <Label htmlFor="state" >State*</Label>
                        <StateSelect onChange={(e) => handleChange(e)} name="state" value={spaceDetails.state || "--select--"}>
                            <option hidden value="--select--">-- select --</option>
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
                        </StateSelect>
                    </Container>
                    <Container>
                        <Label htmlFor="webAddress">Web Address</Label>
                        <Input type="url" name="webAddress" onChange={e => handleChange(e)} value={spaceDetails.webAddress || ""} />
                    </Container>
                    <RatingContainer>
                        <PriceContainer>
                            <Label htmlFor="priceRange">Price Range*</Label>
                            <PriceSelect name="priceRange" onChange={e => handleChange(e)} value={spaceDetails.priceRange || "--select--"} >
                                <option hidden value="--select--">-- select --</option>
                                <option value="NA">N/A</option>
                                <option value="$">$</option>
                                <option value="$$">$$</option>
                                <option value="$$$">$$$</option>
                                <option value="$$$$">$$$$</option>
                            </PriceSelect>
                        </PriceContainer>
                        <SmallRatingContainer>
                            <Label htmlFor="pluginAccess">Plugin Access</Label>
                            <SliderRatingContainer>
                                <SliderRating>poor</SliderRating><SliderRating>ok</SliderRating><SliderRating>great</SliderRating>
                            </SliderRatingContainer>
                            <Slider type="range"
                                list="pluginAccess"
                                name="pluginAccess"
                                min={0}
                                max={2}
                                step={1}
                                value={spaceDetails.pluginAccess}
                                onChange={e => handleChange(e)}
                            />
                            <datalist id="pluginAccess">
                                <option value="0"></option>
                                <option value="1"></option>
                                <option value="2"></option>
                            </datalist>
                        </SmallRatingContainer>
                        <SmallRatingContainer>
                            <Label htmlFor="noiseLevel">Noise Level</Label>
                            <SliderRatingContainer>
                                <SliderRating>loud</SliderRating><SliderRating>med</SliderRating><SliderRating>quiet</SliderRating>
                            </SliderRatingContainer>
                            <Slider type="range"
                                list="noiseLevel"
                                name="noiseLevel"
                                min={0}
                                max={2}
                                step={1}
                                value={spaceDetails.noiseLevel}
                                onChange={e => handleChange(e)}
                            />
                            <datalist id="noiseLevel">
                                <option value="0"></option>
                                <option value="1"></option>
                                <option value="2"></option>
                            </datalist>
                        </SmallRatingContainer>
                        <SmallRatingContainer>
                            <Label htmlFor="seating">Seating</Label>
                            <SliderRatingContainer>
                                <SliderRating>poor</SliderRating><SliderRating>ok</SliderRating><SliderRating>great</SliderRating>
                            </SliderRatingContainer>
                            <Slider type="range"
                                list="seating"
                                name="seating"
                                min={0}
                                max={2}
                                step={1}
                                value={spaceDetails.seating}
                                onChange={e => handleChange(e)}
                            />
                            <datalist id="seating">
                                <option value="0"></option>
                                <option value="1"></option>
                                <option value="2"></option>
                            </datalist>
                        </SmallRatingContainer>
                    </RatingContainer>
                    <Container>
                        <Label htmlFor="rating">Overall Rating</Label>
                        <StyledStarRatings
                            rating={starRating}
                            starRatedColor="#F9CB40"
                            starHoverColor="#F9CB40"
                            starDimension="1.5rem"
                            starSpacing="0.25rem"
                            changeRating={changeRating}
                            numberOfStars={5}
                            name='rating'
                        />
                    </Container>
                    {errorTimer.verifyLength && <DescAlert id="descAlert">The description must contain at least 10 characters</DescAlert>}
                    <Container>
                        <InlineContainer>
                            <Label htmlFor="description" >Description*</Label>
                            <CharCounter count={counter.descriptionCounter}>{counter.descriptionCounter !== 1 ? `${counter.descriptionCounter} characters remaining` : `${counter.descriptionCounter} character remaining`}</CharCounter>
                        </InlineContainer>
                        <DescInput
                            onChange={e => handleChange(e)}
                            onKeyDown={e => handleKeyDown(e)}
                            onPaste={e => handlePaste(e)}
                            placeholder="Enter between 10 and 300 characters"
                            minlength={10} maxlength={300} rows={4} cols={100}
                            wrap="hard" name="description"
                            value={spaceDetails.description || ""}
                        />
                    </Container>
                    <Container>
                    <Label htmlFor="photoContainer" >Photos</Label>
                        <ButtonContainer name="photoContainer">
                            <InlineContainer>
                                <BrowseLabel htmlFor="photos">Browse<I className="fas fa-search"></I></BrowseLabel>
                                <Browse multiple id="photos" name="photos" type="file" onChange={(e) => handleImageChange(e)} />
                                {counter.fileCounter && <PhotoStatusText>{counter.fileCounter !== 1 ? `${counter.fileCounter} files selected` : `${counter.fileCounter} file selected`}</PhotoStatusText>}
                            </InlineContainer>
                            <InlineContainer>
                                <Upload type="button" onClick={handleUpload}>Upload<I className="fas fa-cloud-upload-alt"></I></Upload>
                                {uploadStatus === "uploading" && <StyledCircularProgress color="primary" size="0.75rem" />}
                                {uploadStatus === "complete" && <PhotoStatusText>upload complete</PhotoStatusText>}
                            </InlineContainer>
                        </ButtonContainer>
                    </Container>
                    <Submit type="submit">Submit</Submit>
                </Form>
            </Wrapper>
        </>
    )
}

export default ManageSpacePage;
