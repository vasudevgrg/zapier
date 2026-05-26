import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  AutoIncrement,
  Table,
} from "sequelize-typescript";
import { Zap } from "./zap.model";
import { AvailableTrigger } from "./available-trigger.model";

@Table
export class Trigger extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  id!: number;

  @ForeignKey(() => AvailableTrigger)
  @Column
  trigger_id!: number;
  
  @Column({
    type: DataType.JSONB,
    allowNull: true,
    field: "meta_data",
  })
  metadata!: Record<string, unknown>;

  @ForeignKey(() => Zap)
  @Column
  zap_id!: number;

  @BelongsTo(() => Zap, "zap_id")
  zap!: Zap;

  @BelongsTo(() => AvailableTrigger, "trigger_id")
  available_trigger!: AvailableTrigger;
}
