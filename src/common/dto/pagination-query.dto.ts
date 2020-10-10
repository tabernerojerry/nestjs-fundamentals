import { IsOptional, IsPositive } from 'class-validator';

export class PaginationQueryDto {
  @IsOptional() // It will mark as optional
  @IsPositive()
  limit: number;

  @IsOptional()
  @IsPositive()
  offset: number;
}
