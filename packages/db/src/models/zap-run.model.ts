import { BelongsTo, Column, DataType, Default, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import { User } from "./user.model";
import { Zap } from "./zap.model";

@Table
export class ZapRun extends Model {
    @Default(DataType.UUIDV4)
    @PrimaryKey
    @Column
    id!: string

  @Column({
    type: DataType.JSONB,
    allowNull: true,
  })
  meta_data!: Record<string, any>;

    @Column
    @ForeignKey(()=> Zap)
    zap_id!: string

    @BelongsTo(()=> Zap,'zap_id')
    zap!: Zap

    
}
