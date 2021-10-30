import { Injectable } from '@nestjs/common';
import { IRequest } from 'modules/database/interfaces/request';
import { Request } from 'modules/database/models/request';
import { Transaction } from 'objection';

@Injectable()
export class RequestRepository {
  public async findById(id:string, transaction?: Transaction): Promise<Request> {
    return Request.query(transaction).findById(id)
  }
  public async findAll(transaction?:Transaction): Promise<Request[]> {
    return Request.query(transaction)
  }
  public async insertOne(model:IRequest , transaction?:Transaction):Promise<Request>{
    return Request.query(transaction).insert(model)
  }
};
