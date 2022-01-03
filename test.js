const Sequelize = require("sequelize")
const sequelize = new Sequelize('teste', 'root', '92318491', {
    host: '172.17.0.2',
    dialect: 'mysql'
})

sequelize.authenticate().then(() => {
    console.log('Conectado com sucesso')
}
).catch((err) => {
    console.log('Falha ao se conectar' + err)
}
)

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

// Postagem.create({
//     titulo: "Um conteudo qualquer",
//     conteudo: "Um conteudo qualquerdasdasdasdasdasdasdad"
// })

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }

})

Usuario.create({
    nome: "marcos",
    sobrenome: "vinicius",
    idade: 20,
    email: "marcos@gmail.com",
})

// Usuario.sync({ force: true })