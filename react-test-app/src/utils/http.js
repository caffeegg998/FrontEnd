// import axios from 'axios'
// class Http {
//   instance;
//   constructor() {
//     this.instance = axios.create({
//       baseURL: 'http://localhost:8082/api/',
//       timeout: 10000,
//     });
//       const user = JSON.parse(localStorage.getItem("user"));
//       const tokenAccess = user?.accessToken;
//     if(tokenAccess){
//         this.instance.interceptors.request.use(
//             (config) => {
//
//                 console.log(tokenAccess)
//                 if (tokenAccess) {
//                     config.headers['Authorization'] = `Bearer ${tokenAccess}`;
//                 }
//                 return config;
//             },
//             (error) => {
//                 return Promise.reject(error);
//             }
//         );
//     }
//   }
// }
// const http = new Http().instance;
// // console.log(http);
// export default http

import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "http://localhost:8082/api/",
    timeout: 10000,
})
axiosInstance.interceptors.request.use(function (config) {
    let { headers } = config

    const user = JSON.parse(localStorage.getItem("user"));
    const accessToken = user?.accessToken;
    if (accessToken) {
        config.headers = {
            ...headers,
            "Authorization": `Bearer ${accessToken}`
        }
    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});
