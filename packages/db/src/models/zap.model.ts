import { BelongsTo, Column, DataType, Default, ForeignKey, HasMany, HasOne, Model, PrimaryKey, Table } from "sequelize-typescript";
import { User } from "./user.model";
import { ZapRun } from "./zap-run.model";
import { Trigger } from "./trigger.model";
import { Action } from "./action.model";

@Table
export class Zap extends Model {
    @Default(DataType.UUIDV4)
    @PrimaryKey
    @Column
    id!: string

    @Column
    @ForeignKey(()=> User)
    user_id!: string

    @Column
    name!: string

    @BelongsTo(()=> User) 
    user!: User

    @HasOne( ()=> Trigger, 'zap_id')
    trigger!: Trigger

    @HasMany(()=> Action, 'zap_id')
    actions!: Action[]

    @HasMany(()=> ZapRun,'zap_id')
    zap_runs!: ZapRun[]
}
