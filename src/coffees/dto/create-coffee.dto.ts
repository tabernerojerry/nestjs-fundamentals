import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateCoffeeDto {
  @ApiProperty({ description: 'Name of coffee.' })
  @IsString()
  readonly name: string;

  @ApiProperty({ description: 'Brand name of coffee' })
  @IsString()
  readonly brand: string;

  @ApiProperty({ example: [] })
  @IsString({ each: true })
  readonly flavors: string[];

  @IsOptional()
  @IsString()
  readonly description: string;
}
