// const { v1: uuidv1 } = require('uuid');
const app = require('./config/server.config')
const { PORT } = require('./config')

app.listen(PORT, () => {
    console.log(`SERVER ON ${PORT}`);
})