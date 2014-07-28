'use strict';

module.exports = function(allow) {
  return function(req, res, next) {
    // ask if they are a cop
    res.header('X-Are-You-A-Cop', 'If you are you have to tell me');
    
    // flag down cops
    if (req.header('X-I-Am-A-Cop')) {
      req.cop = true;
    }

    // allow non-cops or cops if allow is on
    if (!req.cop || allow) {
      return next();
    }

    // b& cops
    res.status(403);
    res.end();
  };
};