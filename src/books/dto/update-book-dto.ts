import { IsUUID } from 'class-validator';

export class UpdateBookDto {
  readonly title: string;
  readonly author: string;
  readonly isbn: string;
  readonly publishedYear: number;
  readonly isAvailable: boolean;

  @IsUUID('4', { message: 'Category ID must be a UUID' })
  readonly category_id: string;
}
