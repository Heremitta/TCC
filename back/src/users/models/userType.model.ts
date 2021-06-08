import { IsNotEmpty } from 'class-validator';
import { Column, Table, Model, DataType, AutoIncrement, PrimaryKey } from 'sequelize-typescript';

@Table
export class userTypeModel extends Model {

    @PrimaryKey
    @Column({
      type: DataType.UUID,
      allowNull: false,
    })
    id:string

  @IsNotEmpty()
  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  description: string;

  @IsNotEmpty()
  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  active: boolean;
}
