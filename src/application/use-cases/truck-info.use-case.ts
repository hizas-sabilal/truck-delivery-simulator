import { Truck } from "../../domain/entities/truck.entity";
import { ITruckRepository } from "../../domain/ports/repository/truck.repository.interface";
import { OperationStatus } from "../../domain/value-objects/operation-status.value-object";

export class TruckInfoUseCase {

    constructor(
        private truckRepository: ITruckRepository
    ){}

    execute() : string {

        const trucks = this.truckRepository.findAllTrucks();
        let result: string = ''
        for(const truck of trucks){
            const departureDays = truck.dayDepartures.map(day => day.toString()).join(', ');
            result += `Truck ${truck.id}: ${departureDays}\n`
        }
        result += `\nTOTAL Trucks: ${trucks.length}`
        return result
    }

}