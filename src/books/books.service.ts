import { Injectable, NotFoundException } from '@nestjs/common';
import { Book } from './entities/book.entity.js';
import { CreateBookDto } from './dto/create-book-dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateBookDto } from './dto/update-book-dto.js';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
  ) {}

  async findAll(): Promise<Book[]> {
    return await this.bookRepository.find({
      order: { createdAt: 'DESC' },
    });
  }
  async create(dto: CreateBookDto): Promise<Book> {
    const newbook = this.bookRepository.create(dto);
    return await this.bookRepository.save(newbook);
  }

  async findById(id: string): Promise<Book> {
    const book = await this.bookRepository.findOneBy({ id });
    if (!book) {
      throw new NotFoundException(`Produk dengan ID #${id} tidak ditemukan.`);
    }
    return book;
  }
  async update(id: string, dto: UpdateBookDto): Promise<Book> {
    const book = await this.findById(id);

    const updatedbook = this.bookRepository.merge(book, dto);

    return await this.bookRepository.save(updatedbook);
  }

  async delete(id: string): Promise<{ message: string; deletedId: string }> {
    await this.findById(id);
    await this.bookRepository.softDelete(id);

    return {
      message: `Produk #${id} berhasil diarsipkan (soft-deleted).`,
      deletedId: id,
    };
  }

  async restore(id: string): Promise<{ message: string }> {
    await this.bookRepository.restore(id);
    return { message: `Produk #${id} berhasil dipulihkan kembali.` };
  }
}
