export class ResponseDefaultApi<T> {
    sucess: boolean
    data: T | undefined
    statusCode: number

    constructor(sucess = false, data: T | undefined = undefined, statusCode = 0) {
        this.sucess = sucess
        this.data = data
        this.statusCode = statusCode
    }
}