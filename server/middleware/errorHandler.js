'use strict';

exports.handler = (err, req, res, next) => {
  // set locals, only providing error in development
  console.log(err)
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.json({
    status: err.status || 500,
    message: err.message || '500 Internal Server Error',
  });
};
