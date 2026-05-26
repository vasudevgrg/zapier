import { AutoIncrement, Column, DataType, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Action } from "./action.model";
import { Trigger } from "./trigger.model";

@Table
export class AvailableTrigger extends Model {
    @AutoIncrement
    @PrimaryKey
    @Column(DataType.INTEGER)
    id!: number

    @Column
    name!: string

    @Column
    image!: string 
    
    @HasMany(()=> Trigger, 'trigger_id')
    triggers!: Trigger[]
}
