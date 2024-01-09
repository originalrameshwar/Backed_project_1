// app/routes/index.js
import { app } from '../app.js';
import router  from './users.js'

app.use('/', router);

export { app };
