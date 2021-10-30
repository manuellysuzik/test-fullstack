import { Injectable } from '@nestjs/common';
import { IRequest } from 'modules/database/interfaces/request';
import { IPaginationParams } from 'modules/common/interfaces/pagination';
import { Request } from 'modules/database/models/request';
import { Page, Transaction } from 'objection';

@Injectable()
export class RequestRepository {
  public async findById(id: string, transaction?: Transaction): Promise<Request> {
    return Request.query(transaction).findById(id)
  }
  public async listAll(params: IPaginationParams, transaction?: Transaction): Promise<Page<Request>> {
    let query = Request.query(transaction).select('*')
      .page(params.page, params.pageSize);

    console.log(query)

    return query

  }
  public async insertOne(model: IRequest, transaction?: Transaction): Promise<Request> {
    return Request.query(transaction).insert(model)
  }
};
