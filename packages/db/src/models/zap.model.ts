import { BelongsTo, Column, DataType, Default, ForeignKey, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import { User } from "./user.model";
import { ZapRun } from "./zap-run.model";

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

    @HasMany(()=> ZapRun,'zap_id')
    zap_runs!: ZapRun[]
}
