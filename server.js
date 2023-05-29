import cors from 'cors';
import express from 'express';

import { connectDB } from './db.js';

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
