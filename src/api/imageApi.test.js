require('dotenv').config();
const mockAxios = require('axios');
const { getList } = require('./imageApi');

describe('test axios api calls', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should call image endpoint', async () => {
    await getList();
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
  });
});
