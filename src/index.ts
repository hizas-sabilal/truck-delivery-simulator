
import { Variable } from "./variable";
import { TruckDepartureUseCase } from "./application/use-cases/truck-departure.use-case";
import { TruckReturnUseCase } from "./application/use-cases/truck-return.use-case";
import { TruckMaintenanceUseCase } from "./application/use-cases/truck-maintenance.use-case";
import { TruckInfoUseCase } from "./application/use-cases/truck-info.use-case";
import { TruckRepository } from "./infrastructure/repository/truck.repository";
import { IdGenerator } from "./infrastructure/services/id-generator";
import { TruckSimulation } from "./presentation/truck.simulation";

const NUMBER_OF_DAYS = 30;

const truckRepository = new TruckRepository();
const idGenerator = new IdGenerator();
const truckDepartureUseCase = new TruckDepartureUseCase(truckRepository, idGenerator, Variable.OPERATIONAL_TIME, Variable.MAINTENANCE_DURATION);
const truckReturnUseCase = new TruckReturnUseCase(truckRepository);
const truckMaintenanceUseCase = new TruckMaintenanceUseCase(truckRepository);
const truckInfoUseCase = new TruckInfoUseCase(truckRepository);
const truckSimulation = new TruckSimulation(truckDepartureUseCase, truckReturnUseCase, truckMaintenanceUseCase, truckInfoUseCase);

function main() {    
    for (let day = 1; day <= NUMBER_OF_DAYS; day++) {
        truckSimulation.simulation(day);
    }
    truckSimulation.info();
}

main()