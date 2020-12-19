module.exports = {
    port: process.env.PORT || 8081,//54320
    db: {
        database: process.env.DB_NAME || 'ProstoLab',
        user: "postgres",
        password: process.env.DB_PASS || "anuar4ik",
        options: {
            dialect: "postgres",
            host: process.env.HOST || "localhost",
            port: 5432

        }
    }
}