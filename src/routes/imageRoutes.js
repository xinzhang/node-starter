const router = require('express').Router();
const imageApi = require('../api/imageApi');

router.get('/image-list', async (req, res) => {
  try {
    const result = await imageApi.getList();
    res.send(result.data).end();
  } catch (err) {
    res.send(err);
  }
});

module.exports = () => {
  return router;
};
