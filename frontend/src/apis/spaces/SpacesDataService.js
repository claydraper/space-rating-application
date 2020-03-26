// external dependencies
import axios from 'axios';

// internal dependencies
import { API_URL } from '../Constants';

class SpacesDataService {

    createSpace(space) {
        return axios.post(`${API_URL}/spaces`, space)
    }

}

export default new SpacesDataService();
