import axios from 'axios'
import cookie from 'js-cookie'

const http =  axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    withCredentials: false,
})

http.interceptors.request.use((config) => {
  if(config.url.search('/auth') === 0) config.baseURL = process.env.REACT_APP_API_URL
  const token = cookie.get('token')
  if(token) config.headers.Authorization = token;
  return config;
});


http.interceptors.response.use(async response => {
  const newToken = response.headers['new-token']
  if (newToken && `Bearer ${newToken}` !== http.defaults.headers.common.Authorization) {
      http.defaults.headers.common.Authorization = `Bearer ${newToken}`;
      cookie.set('token', `Bearer ${newToken}`, {
          expires: 30,
          httpOnly: false
      })
  }
  return response;
}, async error => {
    console.log(error)
    
//   if (error.response.status === 401 && error.config.url.search('login') === -1) {
//     window.location.href = '/login'	
//   }
  
   return Promise.reject(error);
});


export default http