import axios from 'axios'

const instance=axios.create({
    baseURL:process.env.REACT_APP_NEWS_URL,
})
instance.defaults.headers.common['x-api-key']=process.env.REACT_APP_NEWS_API_KEY;

export default instance