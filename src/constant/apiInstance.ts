import axios, { AxiosRequestHeaders, CreateAxiosDefaults } from 'axios';
import { getAccessToken } from 'utils';


const TokenCybersoft =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJOb2RlSlMgMzYiLCJIZXRIYW5TdHJpbmciOiIxOC8wNC8yMDI0IiwiSGV0SGFuVGltZSI6IjE3MTMzOTg0MDAwMDAiLCJuYmYiOjE2OTYwMDY4MDAsImV4cCI6MTcxMzU0NjAwMH0.-JdMp_i0Yutjb-Ggtc_Hxaf-D4-wMZyMwBU4CInNHfw";

export const apiInstance = (config?: CreateAxiosDefaults )=>{
    const api = axios.create(config)
    api.interceptors.request.use((config)=>{        
        return {
            ...config,
            headers: {
                TokenCybersoft,
                Authorization: 'Bearer ' + getAccessToken() || '',
            } as unknown as AxiosRequestHeaders,
        };
    })
    return api
}