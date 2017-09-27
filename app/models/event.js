var mongoose = require('mongoose');

module.exports = mongoose.model('Event', {
  templateId: {
    type: String
  },
  name: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  time: {
    type: String,
    default: ''
  },
  contactEmail: {
    type: String,
    default: ''
  }
});
