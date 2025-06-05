import { TruckDepartureUseCase } from "../application/use-cases/truck-departure.use-case";
import { TruckReturnUseCase } from "../application/use-cases/truck-return.use-case";
import { TruckMaintenanceUseCase } from "../application/use-cases/truck-maintenance.use-case";
import { TruckInfoUseCase } from "../application/use-cases/truck-info.use-case";

export class TruckSimulation {

    constructor(
        private truckDepartureUseCase: TruckDepartureUseCase,
        private truckReturnUseCase: TruckReturnUseCase,
        private truckMaintenanceUseCase: TruckMaintenanceUseCase,
        private truckInfoUseCase: TruckInfoUseCase
    ) {}

    public simulation(day: number) {
        try {
            this.truckDepartureUseCase.execute({ day });
            this.truckReturnUseCase.execute({ day });
            this.truckMaintenanceUseCase.execute({ day });
        } catch (error) {
            console.error(error);
        }
    }
    
    public info() {
        try {
            const result = this.truckInfoUseCase.execute();
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    }

}