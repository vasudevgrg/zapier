import { AutoIncrement, Column, DataType, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Action } from "./action.model";

@Table
export class AvailableAction extends Model {
    @AutoIncrement
    @PrimaryKey
    @Column(DataType.INTEGER)
    id!: number

    @Column
    name!: string

    @Column
    image!: string 
    
    @HasMany(()=> Action, 'action_id')
    actions!: Action[]
}
