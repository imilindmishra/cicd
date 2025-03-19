const express = require('express');
const app = express();
const PORT = 8090;

// Middleware to parse JSON requests
app.use(express.json());



// Basic route
app.get('/', (req, res) => {
    res.json({
        message: 'Hello, World!',
        status: 200,
    })
    res.send('Hello, World!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
 