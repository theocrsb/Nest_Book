import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { UpdateBookDto } from '../dto/update-book.dto';
@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id?: number;
  @Column({ nullable: false })
  title: string;
  @Column({
    nullable: false,
    type: 'date',
  })
  dateParution: string;
}
