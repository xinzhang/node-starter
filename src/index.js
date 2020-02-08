const express = require('express');
const logger = require('./utilities/logger');

const imageRoutes = require('./routes/imageRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
  });
});
app.use('/api', imageRoutes(app));

app.listen(port, () => {
  logger.info(`🚀  server ready at: http://::${port}`);
});
