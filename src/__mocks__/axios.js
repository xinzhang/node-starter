module.exports = {
  get: jest.fn((url) => {
    console.log(`Running axios mock version: ${url}`);
    Promise.resolve({ data: { id: '001' } });
  }),
};
