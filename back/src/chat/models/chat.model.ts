import { IsNotEmpty } from 'class-validator';
import {
  Model,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Product } from 'src/products/models/products.model';
import { user } from 'src/users/models/user.model';

@Table({
  tableName: 'chats',
})
export class Chat extends Model {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  id;

  @BelongsTo(() => user)
  user?: user;

  @BelongsTo(() => Product)
  product?: Product;

  @IsNotEmpty()
  @ForeignKey(() => Product)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  productId: string;

  @IsNotEmpty()
  @ForeignKey(() => user)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  userPrimaryId: string;

  @IsNotEmpty()
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  userSecondaryId: string;

  @Column({
    type: DataType.UUID,
    allowNull: true,
  })
  lastMessageId: string;
}
