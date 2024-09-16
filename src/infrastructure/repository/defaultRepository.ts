import ApiMethods from '../api/apiMethods'
import {ResponseDefaultApi} from "../../helpers/responseDefaultApi";

export abstract class DefaultRepositoryApi {
    protected api: ApiMethods

    constructor() {
        this.api = new ApiMethods()
    }

    protected formalizeResponse<T>(data: ResponseDefaultApi<T>): T | undefined {
        const response = data
        if (response.sucess) {
            return response.data
        }

        return undefined
    }
}