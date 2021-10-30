import { Injectable } from '@nestjs/common';
import { IRequest } from 'modules/database/interfaces/request';

import { RequestRepository } from '../repositories/request';

@Injectable()
export class RequestService {
  constructor(private requestRepository: RequestRepository) { }

  public async create(model: IRequest) {
    return this.requestRepository.insertOne(model)
  }
}
