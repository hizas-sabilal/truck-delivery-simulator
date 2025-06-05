
enum OperationStatusValue {
    DEPART = 'DEPART',
    RETURN = 'RETURN',
    MAINTENANCE = 'MAINTENANCE',
    IDLE = 'IDLE'
}

export class OperationStatus {
    private constructor(public readonly value: OperationStatusValue) {}

    public static DEPART = new OperationStatus(OperationStatusValue.DEPART);
    public static RETURN = new OperationStatus(OperationStatusValue.RETURN);
    public static MAINTENANCE = new OperationStatus(OperationStatusValue.MAINTENANCE);
    public static IDLE = new OperationStatus(OperationStatusValue.IDLE);
    
    public equals(other: OperationStatus) : boolean {
        return this.value === other.value;
    }
}