import { Truck } from "../../domain/entities/truck.entity";
import { ITruckRepository } from "../../domain/ports/repository/truck.repository.interface";

export class TruckRepository implements ITruckRepository {
    
    public pool: Truck[];

    constructor() {
        this.pool = [];
    }

    public addTruck(truck: Truck) {
        this.pool.push(truck);
        return truck;
    }

    public updateTruck(truck: Truck) {
        const index = this.pool.findIndex(t => t.id === truck.id);
        this.pool[index] = truck;
        return truck;
    }

    public findTrucksByStatus(statuses: string[]) : Truck[] {
        return this.pool.filter(t => {
            return statuses.includes(t.operationStatus.value)
        });
    }

    public findAllTrucks() : Truck[] {
        return this.pool;
    }

}