import { Truck } from "../../domain/entities/truck.entity";
import { ITruckRepository } from "../../domain/ports/repository/truck.repository.interface";
import { OperationStatus } from "../../domain/value-objects/operation-status.value-object";

export class TruckReturnUseCase {

    constructor(
        private truckRepository: ITruckRepository
    ){}

    execute(input: { day: number }) : Truck[] {

        const trucks = this.truckRepository.findTrucksByStatus([OperationStatus.DEPART.value])
        const result : Truck[] = []
        for(const truck of trucks){
            if(truck.isAbleToReturn(input.day)){
                truck.return(input.day);
            }
            this.truckRepository.updateTruck(truck);
            result.push(truck)
        }
        return result
        
    }

}