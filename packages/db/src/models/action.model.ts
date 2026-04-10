import { BelongsTo, Column, DataType, Default, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import { AvailableAction } from "./available-action.model";
import { Zap } from "./zap.model";

@Table
export class Action extends Model {
    @Default(DataType.UUIDV4)
    @PrimaryKey
    @Column
    id!: string

    @ForeignKey(()=> AvailableAction)
    @Column
    action_id!: string

    @ForeignKey(()=> Zap)
    @Column
    zap_id!: string

    @BelongsTo(()=> Zap,'zap_id')
    zap!: Zap

    @BelongsTo(()=> AvailableAction,'action_id')
    available_action!: AvailableAction

}
