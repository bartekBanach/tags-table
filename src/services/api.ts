import axios from "axios";


export const getTags = async (page:number, pageSize:number, sort:string, order:string) => {
    const response = await axios.get(`https://api.stackexchange.com/2.3/tags?page=${page}&pagesize=${pageSize}&order=${order}&sort=${sort}&site=meta&filter=!nNPvSNVZJS`);
    return response.data as ApiData
}