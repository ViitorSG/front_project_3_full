import {PeopleRepository} from "../../../infrastructure/repository/peopleRepository/peopleRepository";

export class PeopleService {
    static async getAllPeople(): Promise<any> {
        const peopleRepository = new PeopleRepository()
        return await peopleRepository.getAllPeople()
    }

    static async getPeopleById(id: number): Promise<any> {
        const peopleRepository = new PeopleRepository()
        return await peopleRepository.getPeopleById(id)
    }

    static async createPeople(data: any): Promise<any> {
        const peopleRepository = new PeopleRepository()

        return await peopleRepository.createPeople(data)
    }

    static async updatePeople(id: number, data: any): Promise<any> {
        const peopleRepository = new PeopleRepository()

        return await peopleRepository.updatePeople(id, data)
    }

    static async deletePeople(id: number): Promise<any> {
        const peopleRepository = new PeopleRepository()

        return await peopleRepository.deletePeople(id)
    }
}