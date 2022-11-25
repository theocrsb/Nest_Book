import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { UpdateBookDto } from '../dto/update-book.dto';
@Entity()
export class Book {
  update(updateBookDto: UpdateBookDto): Book | PromiseLike<Book | null> | null {
    throw new Error('Method not implemented.');
  }
  save(updateBookDto: UpdateBookDto): Book | PromiseLike<Book | null> | null {
    throw new Error('Method not implemented.');
  }
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
