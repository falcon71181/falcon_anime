export const checkHealth = (data) => {
    if(data === "true"){
        return "200 OK";
    }
    else{
        return "500 SEVER DOWN";
    }
}