const { default: axios } = require('axios')
const apiUrl = `${process.env.NEXT_PUBLIC_REST_API_URL}/api`;
const axiosClient = axios.create({ baseURL: apiUrl, });
export default axiosClient