import dotenv from 'dotenv';
dotenv.config();

export enum Variable {
    OPERATIONAL_TIME = process.env.OPERATIONAL_TIME ? parseInt(process.env.OPERATIONAL_TIME) : 3,
    MAINTENANCE_DURATION = process.env.MAINTENANCE_DURATION ? parseInt(process.env.MAINTENANCE_DURATION) : 1
}