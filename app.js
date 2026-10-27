const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Use port from environment or default to 3000

// A health check endpoint for ECS/ALB
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'UP' });
});

app.get('/', (req, res) => {
    res.send('Hello World from Docker and ECS!');
});

app.get('/test', (req, res) => {
    res.send('Cant believe my eyes!');
});

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});