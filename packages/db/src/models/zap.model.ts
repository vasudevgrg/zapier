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

    @BelongsTo(()=> User) 
    user!: User

    @HasOne(() => Trigger, { foreignKey: "zap_id", as: "trigger" })
    trigger!: Trigger

    @HasMany(() => Action, { foreignKey: "zap_id", as: "actions" })
    actions!: Action[]

    @HasMany(() => ZapRun, { foreignKey: "zap_id", as: "zap_runs" })
    zap_runs!: ZapRun[]
}
