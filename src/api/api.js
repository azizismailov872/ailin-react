import * as axios from "axios";

export const instance = axios.create({
	withCredentials: true,
    baseURL: "http://ailin.local/api/admin/v1",
    headers: { 
    	Accept: "application/json" ,  
    },
});
