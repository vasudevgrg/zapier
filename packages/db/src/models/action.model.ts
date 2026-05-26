import { AutoIncrement, BelongsTo, Column, DataType, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import { AvailableAction } from "./available-action.model";
import { Zap } from "./zap.model";

@Table
export class Action extends Model {
    @AutoIncrement
    @PrimaryKey
    @Column(DataType.INTEGER)
    id!: number

    @Column
    order!: number

    @ForeignKey(()=> AvailableAction)
    @Column
    action_id!: number

    @Column({
        type: DataType.JSONB,
        allowNull: true,
        field: "meta_data",
    })
    metadata!: Record<string, unknown>

    @ForeignKey(()=> Zap)
    @Column
    zap_id!: number

    @BelongsTo(()=> Zap,'zap_id')
    zap!: Zap

    @BelongsTo(()=> AvailableAction,'action_id')
    available_action!: AvailableAction

}
