import axios from 'axios'
class Http {
  instance;
  constructor() {
    this.instance = axios.create({
      baseURL: 'http://localhost:8082/api/',
      timeout: 10000,
    });
  }
}
const http = new Http().instance;
// console.log(http);
export default http
