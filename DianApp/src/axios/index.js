import axios from 'axios';
import { API_BASE_URL } from 'react-native-dotenv'


export default axios.create({
    baseURL:API_BASE_URL,
    headers:{
        common:{
            'Content-Type':'application/json;charset=utf-8'
        }
    }
 })