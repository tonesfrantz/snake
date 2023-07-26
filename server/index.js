import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';
const app = express();

app.use(bodyParser.json({ limit: '32mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '32mb', extended: true }));
app.use(cors());

app.use('/posts', postRoutes);

const username = encodeURIComponent('tonesfrantz');
const password = encodeURIComponent('OTiYGWjABFIib0Pz');
const CONNECTION_URL = `mongodb+srv://${username}:${password}@cluster0.lhgf8s9.mongodb.net/?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 5000;

mongoose
    .connect(CONNECTION_URL)
    .then(() =>
        app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
    )
    .catch((err) => console.log(err.message));
