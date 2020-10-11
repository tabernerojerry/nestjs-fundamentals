import { IsOptional, IsString } from 'class-validator';

export class CreateCoffeeDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly brand: string;

  @IsString({ each: true })
  readonly flavors: string[];

  @IsOptional()
  @IsString()
  readonly description: string;
}
