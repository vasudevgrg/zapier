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
export enum Status {
  PENDING = "pending",
  RUNNING = "running",
  COMPLETED = "completed",
}
@Table
export class ZapRun extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  id!: number;

  @Column({
    type: DataType.JSONB,
    allowNull: true,
  })
  meta_data!: Record<string, unknown>;

  @Column
  @ForeignKey(() => Zap)
  zap_id!: number;

  @Column({
    type: DataType.ENUM(...Object.values(Status)),
    defaultValue: Status.PENDING,
  })
  status!: Status;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
    defaultValue: 1,
  })
  current_action!: number;

  @BelongsTo(() => Zap, "zap_id")
  zap!: Zap;

   markAsRunning() {
     this.status= Status.RUNNING
  }

  markAsCOmpleted() {
    this.status = Status.COMPLETED
  }

  incrementActionOrder() {
    this.current_action++;
  }
}
