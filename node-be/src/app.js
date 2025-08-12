import createError from 'http-errors';
import express, { json, urlencoded } from 'express';
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import routes from './routes/index.js';


const app = express();

// Recreate __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// view engine setup
app.set('views', join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(join(__dirname, 'public')));


// router 
app.use('/api', routes);
// Default root route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the MEAN backend" });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
   res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
    error: process.env.NODE_ENV === "development" ? err : {}
  });
});

export default app;
