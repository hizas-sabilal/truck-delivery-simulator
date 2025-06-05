import { OperationStatus } from '../value-objects/operation-status.value-object';
export class Truck {

    public id                  : number;
    public operationalTime     : number;
    public maintenanceDuration : number;
    public operationStatus     : OperationStatus;
    public dayDepartures       : number[];
    public dayReturns          : number[];
    public dayMaintenances     : number[];
    
    constructor( id: number, operationalTime: number, maintenanceDuration: number ) {
        this.id = id;
        this.operationalTime = operationalTime;
        this.maintenanceDuration = maintenanceDuration;
        this.operationStatus = OperationStatus.IDLE;
        this.dayDepartures = [];
        this.dayReturns = [];
        this.dayMaintenances = [];
    }

    get lastDepartureDay(): number {
        if( this.dayDepartures.length === 0 ) {
            return 0;
        }
        return this.dayDepartures[this.dayDepartures.length - 1];
    }

    get lastReturnDay(): number {
        if( this.dayReturns.length === 0 ) {
            return 0;
        }
        return this.dayReturns[this.dayReturns.length - 1];
    }

    get lastMaintenanceDay(): number {
        if( this.dayMaintenances.length === 0 ) {
            return 0;
        }
        return this.dayMaintenances[this.dayMaintenances.length - 1];
    }

    public isAbleToDepart( day: number ): boolean {        
        if( this.id%2 == day%2 && 
            (
                this.operationStatus.equals( OperationStatus.IDLE )
                || ((this.lastMaintenanceDay + this.maintenanceDuration) === day && this.operationStatus.equals(OperationStatus.MAINTENANCE))
            ) 
        ) {
            return true;
        } else {
            return false;
        }
    }

    public depart( day: number ) {
        if( !this.operationStatus.equals(OperationStatus.IDLE) && !this.operationStatus.equals(OperationStatus.MAINTENANCE) ) {
            throw new Error( 'Invalid truck status to depart' );
        }
        this.operationStatus = OperationStatus.DEPART;
        this.dayDepartures.push( day );
    }

    public isAbleToReturn( day: number ): boolean {
        if( (this.lastDepartureDay + this.operationalTime -1) === day && this.operationStatus.equals(OperationStatus.DEPART) ) {
            return true;
        } else {
            return false;
        }
    }

    public return( day: number ) {
        if( !this.operationStatus.equals(OperationStatus.DEPART) ) {
            throw new Error( 'Invalid truck status to return' );
        }
        this.operationStatus = OperationStatus.RETURN;
        this.dayReturns.push( day );
    }

    public isNeedMaintenance( day: number ): boolean {
        if( this.lastReturnDay + 1 === day && this.operationStatus.equals(OperationStatus.RETURN) ) {
            return true;
        } else {
            return false;
        }
    }

    public maintenance( day: number ) {
        if( !this.operationStatus.equals(OperationStatus.RETURN) ) {
            throw new Error( 'Invalid truck status to need maintenance' );
        }
        this.operationStatus = OperationStatus.MAINTENANCE;
        this.dayMaintenances.push( day );
    }

}