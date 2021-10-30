import { ApiProperty } from '@nestjs/swagger';
import { Model } from 'objection';
import { v4 as uuid } from 'uuid';

import { IRequest } from '../interfaces/request';

export class Request extends Model implements IRequest {
  @ApiProperty({type: 'string'})
  public id: string;
  @ApiProperty({type: 'string'})
  public description:string;
  @ApiProperty({type: 'integer'})
  public qtd:number;
  @ApiProperty({type: 'integer'})
  public price:number;
  @ApiProperty({ type: 'string', format: 'date-time' })
  public createdDate: Date;
  @ApiProperty({ type: 'string', format: 'date-time' })
  public updatedDate: Date;

  public static get tableName(): string {
    return 'Request'
  }

  $beforeInsert(){
    this.id = uuid()
    console.log(uuid())

    this.createdDate = this.createdDate = new Date()
  }
  $beforeUpdate(){
    this.updatedDate = this.updatedDate = new Date()
  }

  public $formatJson(data:IRequest): IRequest{
    return data
  }
};
