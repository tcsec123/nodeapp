const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Hello, K8s CI!'));
app.listen(3000, () => console.log('Server running on port 3000'));