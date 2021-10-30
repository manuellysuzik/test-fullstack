import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthRequired } from 'modules/common/guards/token';
import { IRequest } from 'modules/database/interfaces/request';
import { Request } from 'modules/database/models/request';

import { RequestRepository } from '../repositories/request';
import { RequestService } from '../services/request';

@ApiTags('App: Request')
@Controller('/request')
@AuthRequired()
export class RequestController {
  constructor(private requestRepository: RequestRepository, private requestService: RequestService){}

  @Get()
  @ApiResponse({status: 200, type:Request})
  public async list(){
    return this.requestRepository.findAll();
  }
  @Post()
  @ApiResponse({status: 200, type:Request})
  public async create(@Body() model: IRequest){
    return this.requestService.create(model)
  }
};
