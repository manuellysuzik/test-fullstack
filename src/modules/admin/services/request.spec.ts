import { RequestRepository } from "../repositories/request";
import { IRequest } from "modules/database/interfaces/request";
import { RequestService } from "./request";

describe('Admin/Request', () => {

  let requestRepository: RequestRepository
  let service: RequestService

  const request: IRequest = {
    description: 'new description',
    qtd: 1,
    price: 1200.00
  };

  beforeEach(async () => {
    requestRepository = new RequestRepository();

    service = new RequestService(requestRepository);
  });

  it('should create a user', async () => {

    jest.spyOn(requestRepository, 'insertOne').mockImplementationOnce(request => Promise.resolve({ ...request } as any));

    const result = await service.create(request);

    expect(result).not.toBeFalsy();
    expect(result).toEqual(request);
  });
})