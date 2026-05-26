import { AutoIncrement, BelongsTo, Column, DataType, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import { ZapRun } from "./zap-run.model";

enum OutboxMessageStatus {
    SENT=  'sent',
    PENDING= 'pending'
}
@Table
export class OutboxMessage extends Model {
    @AutoIncrement
    @PrimaryKey
    @Column(DataType.INTEGER)
    id!: number

    @Column({
        defaultValue: OutboxMessageStatus.PENDING
    })
    status!: OutboxMessageStatus

    @ForeignKey(()=> ZapRun)
    @Column
    zap_run_id!: number

    @BelongsTo(()=> ZapRun, 'zap_run_id') 
    zap_run!: ZapRun


    markAsSent() {
         this.status = OutboxMessageStatus.SENT
    }
}
