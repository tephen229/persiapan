import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateBookDto {
  @IsNotEmpty({ message: 'Title is required' })
  @IsString({ message: 'Title must be a string' })
  readonly title: string;

  @IsNotEmpty({ message: 'Author is required' })
  @IsString({ message: 'Author must be a string' })
  readonly author: string;

  @IsNotEmpty({ message: 'ISBN is required' })
  @IsString({ message: 'ISBN must be a string' })
  readonly isbn: string;

  @IsNotEmpty({ message: 'Published year is required' })
  @IsInt({ message: 'Published year must be an integer' })
  readonly publishedYear: number;

  @IsNotEmpty({ message: 'Availability status is required' })
  @IsBoolean({ message: 'Availability status must be a boolean' })
  readonly isAvailable: boolean;

  @IsNotEmpty({ message: 'Category ID is required' })
  @IsUUID('4', { message: 'Category ID must be a UUID' })
  readonly category_id: string;
}
