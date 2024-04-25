import axios from "axios";

const baseURL = 'http://localhost:8080/product';
export const findAll = async()=>{
    try{
        const response = await axios.get(baseURL);
        return response.data;
    } catch (error){
        console.log(error)
    }
    return null;
}