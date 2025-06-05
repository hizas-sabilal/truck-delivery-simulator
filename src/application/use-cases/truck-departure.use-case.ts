import { Truck } from "../../domain/entities/truck.entity";
import { ITruckRepository } from "../../domain/ports/repository/truck.repository.interface";
import { OperationStatus } from "../../domain/value-objects/operation-status.value-object";
import { IIdGenerator } from "../../domain/services/id-generator.interface"; 

export class TruckDepartureUseCase {

    constructor(
        private truckRepository: ITruckRepository,
        private idGenerator: IIdGenerator,
        private operationalTime: number,
        private maintenanceDuration: number
    ) {}

    execute(input: { day: number }): Truck {
        const availableTruck = this.findAvailableTruck(input.day);
        if (availableTruck) {
            return this.prepareTruckForDeparture(availableTruck, input.day);
        }
        const newTruck = this.createNewTruck();
        return this.prepareTruckForDeparture(newTruck, input.day);
    }

    private findAvailableTruck(day: number): Truck | undefined {
        const availableStatuses = [
            OperationStatus.IDLE.value, 
            OperationStatus.MAINTENANCE.value
        ];
        const trucks = this.truckRepository.findTrucksByStatus(availableStatuses);
        const result = trucks.find(truck => truck.isAbleToDepart(day));
        return result;
    }

    private createNewTruck(): Truck {
        const newTruck = new Truck(
            this.idGenerator.generate(),
            this.operationalTime,
            this.maintenanceDuration
        );
        this.truckRepository.addTruck(newTruck);
        return newTruck;
    }

    private prepareTruckForDeparture(truck: Truck, day: number): Truck {
        truck.depart(day);
        this.truckRepository.updateTruck(truck);
        return truck;
    }

}