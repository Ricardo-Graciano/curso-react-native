// Update with your config settings.

module.exports = {
    client: 'postgresql',
    connection: {
        database: 'tasks',
        user: 'postgres',
        password: '123456',
    },
    pool: {
        min: 1,
        max: 50
    },
    migrations: {
        tableName: 'knex_migrations'
    }
};