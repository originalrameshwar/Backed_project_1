import { connectDB } from './src/db/index.js';
await connectDB();

import { app } from './src/routes/index.js';



app.listen(8080, () => {
    console.log("server is listening to port 8080");
  });
