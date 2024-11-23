class ApiError {
    constructor(statusCode,message){
        this.statusCode = statusCode;
        this.message = message
    }
}

export default ApiError;