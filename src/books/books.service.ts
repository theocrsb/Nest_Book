import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBookDto } from './dto (dataTransfertObject)/create-book.dto';
import { UpdateBookDto } from './dto (dataTransfertObject)/update-book.dto';
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

  async findAll(): Promise<Book> {
    return await;
    //`This action returns all books`;
  }

  async findOne(id: number): Promise<Book> {
    return await;
    //`This action returns a #${id} book`;
  }

  async update(id: number, updateBookDto: UpdateBookDto): Promise<Book> {
    return await;
    //`This action updates a #${id} book`;
  }

  async remove(id: number): Promise<String> {
    return await;
    //`This action removes a #${id} book`;
  }
}
