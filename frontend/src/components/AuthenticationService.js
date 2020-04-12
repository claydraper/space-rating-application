class AuthenticationService {

    registerLogin(token, username, userID) {
        sessionStorage.setItem('JWT', token)
        sessionStorage.setItem('username', username)
        sessionStorage.setItem('userID', userID)
    }
}

export default new AuthenticationService();