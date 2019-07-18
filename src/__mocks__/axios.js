const axios = jest.genMockFromModule('axios');

const mockAxios = {
  get: jest.fn(() => Promise.resolve({ data: {} })),
  request: jest.fn(() => Promise.resolve({ data: {} })),
};

axios.get = mockAxios.get;
module.exports = axios;