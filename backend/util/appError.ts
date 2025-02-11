class AppError extends Error{
    statusText: string | undefined;
    statusCode: number | undefined;
    constructor(){
        super()
    }
    create(message:string, statusText:string,statusCode:number){
        this.message = message;
        this.statusText = statusText;
        this.statusCode = statusCode;
        return this;
    }
}

export default new AppError