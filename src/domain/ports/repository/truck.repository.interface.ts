
import { Truck } from "../../entities/truck.entity";

export interface ITruckRepository {
    addTruck(truck: Truck): Truck
    updateTruck(truck: Truck): Truck
    findAllTrucks(): Truck[]
    findTrucksByStatus(statuses: string[]): Truck[]
}