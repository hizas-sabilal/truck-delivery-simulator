import { IIdGenerator } from "../../domain/services/id-generator.interface";

export class IdGenerator implements IIdGenerator {

    private id: number

    constructor( ) {
        this.id = 1
    }
    generate(): number {
        return this.id++;
    }
}