const { Client } = require('pg')

const client = new Client(
    {
        user: 'postgres',
        host: 'localhost',
        database: 'myfamily',
        password: '9081606040',
        port: 5432

    }
);

module.exports = client


