import { Injectable } from '@nestjs/common';
import { Category } from './entities/categories.entity.js';

@Injectable()
export class CategoriesService {
  private categories: Category[] = [
    {
      id: '550e8400-e29b-41d4-a716-446655440001',
      name: 'Fiction',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: '550e8400-e29b-41d4-a716-446655440002',
      name: 'Non-Fiction',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: '550e8400-e29b-41d4-a716-446655440003',
      name: 'Science Fiction',
      created_at: new Date(),
      updated_at: new Date(),
    },
  ];


    // Menampilkan semua kategori
    findAll(): Category[] {
      return this.categories;
    }
  
    // Menampilkan kategori berdasarkan ID
    findById(id: string): Category | undefined {
      return this.categories.find((category) => category.id === id);
    }
}
