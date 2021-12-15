import { mocked } from 'ts-jest/utils';
import countApi from '../../config/api';
import { VisitsRepository } from '../../repositories';

jest.mock('../../config/api');

describe('Visit repository', () => {
  it('should get visits count', async () => {
    const mockedCountApi = mocked(countApi, true);
    const returnRequestData = {
      data: {
        value: 10,
      },
    };
    mockedCountApi.get.mockResolvedValue(returnRequestData);

    const visitsRepository = new VisitsRepository();

    const visitCounter = await visitsRepository.getVisits();

    expect(visitCounter).toEqual(10);
  });

  it('should hit visits count', async () => {
    const mockedCountApi = mocked(countApi, true);
    const returnRequestData = {
      data: {
        value: 20,
      },
    };
    mockedCountApi.get.mockResolvedValue(returnRequestData);

    const visitsRepository = new VisitsRepository();

    const visitCounter = await visitsRepository.incrementVisits();

    expect(visitCounter).toEqual(20);
  });
});
