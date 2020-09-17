import axios from 'axios'

export default axios.create({
    baseURL: 'https://react-quiz-3ec7c.firebaseio.com/'
})