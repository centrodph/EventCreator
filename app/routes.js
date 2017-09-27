var Event = require('./models/event');

function getAll(res) {
  Event.find(function(err, events) {
    if (err) res.send(err);
    res.json(events);
  }).sort({ _id: -1 });
}

module.exports = function(app) {
  app.get('/api/event', function(req, res) {
    getAll(res);
  });

  app.get('/api/event/:eventId', function(req, res) {
    Event.findOne({ _id: req.params.eventId }, function(err, event) {
      if (err) res.send(err);
      res.json(event);
    });
  });

  app.post('/api/event', function(req, res) {
    console.log(req.body);
    Event.create(req.body, function(err, event) {
      if (err) res.send(err);
      getAll(res);
    });
  });

  // application
  app.get('*', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
  });
};
