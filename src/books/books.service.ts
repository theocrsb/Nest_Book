import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private bookRepository: Repository<Book>,
  ) {}

  async create(createBookDto: CreateBookDto): Promise<Book> {
    return await this.bookRepository.save(createBookDto);
    // 'This action adds a new book';
  }

  async findAll(): Promise<Book[]> {
    return await this.bookRepository.find();
    //`This action returns all books`;
  }

  async findOne(id: number): Promise<Book> {
    const bookFound = await this.bookRepository.findOneBy({ id: id });
    if (!bookFound) {
      throw new NotFoundException(`No Books with id ${id}`);
    }
    return bookFound;
    //`This action returns a #${id} book`;
  }

  async update(id: number, updateBookDto: UpdateBookDto): Promise<Book> {
    const bookToUpdate = await this.findOne(id);
    bookToUpdate.dateParution = updateBookDto.dateParution;
    return await this.bookRepository.save(updateBookDto);
  }

  async remove(
    id: number, // : Promise<String>
  ) {
    // return await;
    //`This action removes a #${id} book`;
  }
}
