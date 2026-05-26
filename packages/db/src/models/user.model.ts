import { AutoIncrement, Column, DataType, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Zap } from "./zap.model";

@Table
export class User extends Model {
    @AutoIncrement
    @PrimaryKey
    @Column(DataType.INTEGER)
    id!: number

    @Column
    name!: string

    @Column
    email!: string

    @Column
    password!: string

    @HasMany(()=> Zap)
    zaps!: Zap[]
}
