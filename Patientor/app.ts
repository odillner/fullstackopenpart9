import express from 'express';

const app = express();

app.get('/api/ping', (_req, res) => {
    console.log('someone pinged here');
    res.send('pong');
});

export default app;