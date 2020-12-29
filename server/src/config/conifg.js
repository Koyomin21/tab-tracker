module.exports = {
    port: process.env.PORT || 8081,//54320
    db: {
        user: "postgres",
        host: 'localhost',
        database: process.env.DB_NAME || 'ProstoLab',
        password: process.env.DB_PASS || "anuar4ik",
        port: 5432,
    },
    authentication: {
        jwtSecret: process.env.JWT_SECRET || 'secret'       
    }
}



// options: {
//     dialect: "postgres",
//     host: process.env.HOST || "localhost",
//     port: 5432
// }
    