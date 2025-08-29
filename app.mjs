import express from 'express';

const app = express();
const PORT = 4000;

// Profiles endpoint as per requirements
app.get('/profiles', (req, res) => {
    return res.json({
        "data": {
            "name": "john",
            "age": 20
        }
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;
