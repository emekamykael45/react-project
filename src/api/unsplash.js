import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 7e77e75eea71264df66c6b5caada6348295a97347175c1dde855c977ff7328cf'
    }
});