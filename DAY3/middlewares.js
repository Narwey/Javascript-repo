const fs = require('fs');

// Logging middleware
function Logging(req, res, next) {
  const time = new Date().toISOString();
  const method = req.method;
  const url = req.url;

  const Informations = `${time} - ${method} ${url}\n`;

  fs.appendFile('access.log', Informations, (err) => {
    if (err) {
      console.error('writing to access.log has failed :', err);
    }
  });

  next();
}

// Error handling middleware
function BugHandler(err, req, res, next) {
  console.error('Error:', err.message);

  res.status(500).send({ error: 'An Error is Handled.' });
}

module.exports = { Logging, BugHandler };