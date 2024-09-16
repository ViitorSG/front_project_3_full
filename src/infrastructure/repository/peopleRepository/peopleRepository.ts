import {DefaultRepositoryApi} from "../defaultRepository";
import {People} from "../../../type/people";

export class PeopleRepository extends DefaultRepositoryApi {

    async getAllPeople(): Promise<People[] | undefined> {
        const response = await this.api.get<People[]>('/people');
        return this.formalizeResponse(response);
    }

    async getPeopleById(id: number): Promise<People | undefined> {
        const response = await this.api.get<People>(`/people/${id}`);
        return this.formalizeResponse(response);
    }

    async createPeople(data: People): Promise<People | undefined> {
        const response = await this.api.post<People>('/people', data);
        return this.formalizeResponse(response);
    }

    async updatePeople(id: number, data: People): Promise<People | undefined> {
        const response = await this.api.put<People>(`/people/${id}`, data);
        return this.formalizeResponse(response);
    }

    async deletePeople(id: number): Promise<People | undefined> {
        const response = await this.api.delete<People>(`/people/${id}`);
        return this.formalizeResponse(response);
    }
}
