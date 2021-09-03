import api from "./Requests"

export async function serverAlive() {
    try {
        return api.get("/isAlive").then (
            (res) => 
            {   if (res.data==="Server Alive") {
                    return(true)
                }else{
                    return(false)
                }
            })
    } catch(e) {
        console.log("Failed to require service");
        throw e;      
    }
}

export const promise = new Promise( (resolve, reject) => {
    try {
        return api.get("/isAlive").then (
            (res) => 
            {   if (res.data==="Server Alive") {
                    resolve(true)
                }else{
                    reject(false)
                }
            })
    } catch(e) {
        console.log("Failed to require service");
        throw e;      
    }
})

