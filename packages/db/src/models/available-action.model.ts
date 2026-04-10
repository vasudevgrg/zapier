import { Column, DataType, Default, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Action } from "./action.model";

@Table
export class AvailableAction extends Model {
    @Default(DataType.UUIDV4)
    @PrimaryKey
    @Column
    id!: string

    @Column
    name!: string

    @Column
    image!: string 
    
    @HasMany(()=> Action, 'action_id')
    actions!: Action[]
}
