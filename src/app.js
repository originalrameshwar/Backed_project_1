import express from 'express';
import path from 'path';
import methodOverride from 'method-override';
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

export { app };