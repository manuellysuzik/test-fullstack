import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsOptional, IsString, Min } from 'class-validator';
import { IRequest } from 'modules/database/interfaces/request';

export class RequestValidator implements IRequest {
  @IsOptional()
  @ApiProperty({required:false, type:'string'})
  public id?:string

  @IsNotEmpty()
  @IsString()
  @ApiProperty({required:true, type:'string'})
  public description:string

  @IsNotEmpty()
  @IsInt()
  @Min(0)
  @ApiProperty({required:true, type:'string', minimum:0})
  public qtd:number

  @IsNotEmpty()
  @IsInt()
  @Min(0)
  @ApiProperty({required:true, type:'string', minimum:0})
  public price:number

};
