import { Column, DataType, Default, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Action } from "./action.model";
import { Trigger } from "./trigger.model";

@Table
export class AvailableTrigger extends Model {
    @Default(DataType.UUIDV4)
    @PrimaryKey
    @Column
    id!: string

    @Column
    name!: string

    @Column
    image!: string 
    
    @HasMany(()=> Trigger, 'trigger_id')
    triggers!: Trigger[]
}
