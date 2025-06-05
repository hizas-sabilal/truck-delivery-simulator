import { Truck } from "../../domain/entities/truck.entity";
import { ITruckRepository } from "../../domain/ports/repository/truck.repository.interface";
import { OperationStatus } from "../../domain/value-objects/operation-status.value-object";

export class TruckMaintenanceUseCase {

    constructor(
        private truckRepository: ITruckRepository
    ){}

    execute(input: { day: number }) : Truck[] {
        
        const trucks = this.truckRepository.findTrucksByStatus([OperationStatus.RETURN.value])
        const result : Truck[] = []
        for(const truck of trucks){
            if(truck.isNeedMaintenance(input.day)){
                truck.maintenance(input.day);
            }
            this.truckRepository.updateTruck(truck);
            result.push(truck)
        }
        return result

    }

}