import { BelongsTo, Column, DataType, Default, ForeignKey, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import { ZapRun } from "./zap-run.model";

@Table
export class OutboxMessage extends Model {
    @Default(DataType.UUIDV4)
    @PrimaryKey
    @Column
    id!: string

    @ForeignKey(()=> ZapRun)
    @Column
    zap_run_id!: string

    @BelongsTo(()=> ZapRun, 'zap_run_id') 
    zap_run!: ZapRun
}
