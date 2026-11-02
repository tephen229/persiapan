import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Category } from '../../categories/entities/categories.entity.js';
  import { Publisher } from '../../publishers/entities/publisher.entities.js';

  @Entity({ name: 'books' })
  export class Book {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', length: 30 })
    title: string;

    @Column({ type: 'varchar', length: 45 })
    isbn: string;

    @Column({ type: 'int', default: 0 })
    publishedYear: number;

    @Column({ type: 'boolean', default: true })
    isAvailable: boolean;

    @Column({ type: 'uuid', name: 'category_id' })
    category_id: string;

    @ManyToOne(() => Category, { nullable: false })
    @JoinColumn({ name: 'category_id' })
    category: Category;

    @Column({ type: 'uuid', name: 'publisher_id' })
    publisher_id: string;

    @ManyToOne(() => Publisher, (publisher) => publisher.books, { nullable: false })
    @JoinColumn({ name: 'publisher_id' })
    publisher: Publisher;

    @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
    updatedAt: Date;

    @DeleteDateColumn({ type: 'timestamp', name: 'deleted_at', nullable: true })
    deletedAt: Date;
  }
