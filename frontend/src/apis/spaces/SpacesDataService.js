// external dependencies
import axios from 'axios';

// internal dependencies
import { API_URL } from '../Constants';

class SpacesDataService {

    createSpace(space) {
        return axios.post(`${API_URL}/spaces`, space)
    }

    getAllSpaces() {
        return axios.get(`${API_URL}/spaces`)
    }

    getAllUserSpaces(userId) {
        return axios.get(`${API_URL}/users/${userId}/spaces`)
    }

    getSpace(id) {
        return axios.get(`${API_URL}/spaces/${id}`)
    }
    
    updateSpace(id, space) {
        return axios.put(`${API_URL}/spaces/${id}`, space)
    }

    deleteSpace(externalId) {
        return axios.delete(`${API_URL}/spaces/${externalId}`)
    }

}

export default new SpacesDataService();
