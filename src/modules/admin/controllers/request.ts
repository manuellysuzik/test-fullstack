import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthRequired } from 'modules/common/guards/token';
import { IRequest } from 'modules/database/interfaces/request';
import { enRoles } from 'modules/database/interfaces/user';
import { Request } from 'modules/database/models/request';

import { RequestRepository } from '../repositories/request';
import { RequestService } from '../services/request';
import { ListValidator } from '../validators/request/list';

@ApiTags('Admin: Request')
@Controller('/request')
@AuthRequired([enRoles.admin])
export class RequestController {
  constructor(private requestRepository: RequestRepository, private requestService: RequestService) { }

  @Get()
  @ApiResponse({ status: 200, type: [Request] })
  public async list(@Query() model: ListValidator) {
    return this.requestRepository.listAll(model);

  }
  @Post()
  @ApiResponse({ status: 200, type: Request })
  public async create(@Body() model: IRequest) {
    return this.requestService.create(model)
  }
};
