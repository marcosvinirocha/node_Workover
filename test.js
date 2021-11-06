const Sequelize = require("sequelize")
const sequelize = new Sequelize('teste', 'root', '92318491', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(() => {
    console.log('Conectado com sucesso')
}
).catch((err) => {
    console.log('Falha ao se conectar' + err)
}
)