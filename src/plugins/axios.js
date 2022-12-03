import axios from 'axios';
import cookie from 'vue-cookies'

const instance = axios.create();
instance.interceptors.request.use(function (config) {
  config.headers['Authorization'] = `Bearer ${cookie.get('token')}`
  return config
});

instance.interceptors.response.use( 
  (response) => {return response},
  (err) => {
    console.log(err)
  }
)


export default instance
