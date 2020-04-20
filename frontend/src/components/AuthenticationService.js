class AuthenticationService {

    registerLogin(token, username, userID, firstName) {
        sessionStorage.setItem('JWT', token)
        sessionStorage.setItem('username', username)
        sessionStorage.setItem('userID', userID)
        sessionStorage.setItem('FirstName', firstName)
    }
}

export default new AuthenticationService();