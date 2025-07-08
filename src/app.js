import express from 'express';
import membersRouter from './routes/membersRoutes.js';

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/members', membersRouter);
