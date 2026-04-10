import { Column, DataType, Default, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Zap } from "./zap.model";

@Table
export class User extends Model {
    @Default(DataType.UUIDV4)
    @PrimaryKey
    @Column
    id!: string

    @Column
    name!: string

    @Column
    email!: string

    @Column
    password!: string

    @HasMany(()=> Zap)
    zaps!: Zap[]
}
