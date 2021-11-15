import pkg from 'pg';
const { Client } = pkg;

const client = new Client({
    dialect: 'postgres',
    database: 'postgres',
    user: 'postgres',
    host: 'localhost',
    port: 10553,
    password: 'admin'
});

client.connect(err => {
    if (err) {
        console.error('connection error', err.stack);
    } else {
        console.log('connected');
    }
});

client
    .query('select * from users')
    .then(() => client.end());
