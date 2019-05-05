const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '..', '.env') })
const app = require('./index')

// eslint-disable-next-line no-console
app.listen(3000, () => console.log('API running at localhost:3000'))
