// const path = require('path');

import { join } from 'path';

// export const PATH_DB = path.join(__dirname, '../db/db.json');

export const PATH_DB = join(process.cwd(), 'src', 'db', 'db.json');

// module.exports = { PATH_DB };
