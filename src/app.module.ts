import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// ajout typeORM module
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksModule } from './books/books.module';
import * as dotenv from 'dotenv';
import { Book } from './books/entities/book.entity';

dotenv.config({ path: '.env' });

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Book],
      synchronize: process.env.MODE === 'DEV' ? true : false,
    }),
    BooksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
