// const { UPSERT } = require("sequelize/types/lib/query-types")

module.exports = (sequelize, DataTypes) =>{
    const Users = sequelize.define('Users', {
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        password: {
            type: DataTypes.STRING
        }
    })
    return Users
}