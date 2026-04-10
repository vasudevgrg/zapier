import {
  BelongsTo,
  Column,
  DataType,
  Default,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";
import { Zap } from "./zap.model";
import { AvailableTrigger } from "./available-trigger.model";

@Table
export class Trigger extends Model {
  @Default(DataType.UUIDV4)
  @PrimaryKey
  @Column
  id!: string;

  @ForeignKey(() => AvailableTrigger)
  @Column
  trigger_id!: string;
  
  @Column({
    type: DataType.JSONB,
    allowNull: true,
  })
  meta_data!: Record<string, any>;

  @ForeignKey(() => Zap)
  @Column
  zap_id!: string;

  @BelongsTo(() => Zap, "zap_id")
  zap!: Zap;

  @BelongsTo(() => AvailableTrigger, "action_id")
  available_trigger!: AvailableTrigger;
}
