// const { v1: uuidv1 } = require('uuid');
const app = require('./config/server.config')
const PORT = 3001

app.listen(PORT, () => {
    console.log('SERVER ON');
})