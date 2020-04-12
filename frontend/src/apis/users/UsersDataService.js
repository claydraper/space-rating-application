// external dependencies
import axios from 'axios';

// internal dependencies
import { API_URL } from '../Constants';

class UsersDataService {

    createUser(user) {
        return axios.post(`${API_URL}/users`, user)
    }

    userLogin(user) {
        return axios.post(`${API_URL}/login`, user)
    }
}

export default new UsersDataService();
