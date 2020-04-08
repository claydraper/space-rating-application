class Authentication {
    registerLogin(username, password) {
        sessionStorage.setItem('authenticatedUser', username)
    }
}

export default Authentication;