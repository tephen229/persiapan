import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Author } from '../../authors/entities/author.entity.js';
import { Book } from '../../books/entities/book.entity.js';

@Entity({ name: 'book_authors' })
export class BookAuthor {
  @PrimaryColumn({ type: 'uuid', name: 'book_id' })
  book_id: string;

  @PrimaryColumn({ type: 'uuid', name: 'author_id' })
  author_id: string;

  @ManyToOne(() => Book, { nullable: false })
  @JoinColumn({ name: 'book_id' })
  book: Book;

  @ManyToOne(() => Author, { nullable: false })
  @JoinColumn({ name: 'author_id' })
  author: Author;
}
