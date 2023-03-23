import axios from "axios";
export const baseUrl="https://bayut.p.rapidapi.com"
export const fetchApi=async(url)=>{
    const {data}=await axios.get((url),{
        headers: {
            'X-RapidAPI-Key': 'a2fe05bbd6mshfdebc9827c2bd73p14e889jsn25b3958a61d2',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          } 
    })
    return data
}