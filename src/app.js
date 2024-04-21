import express from 'express'
import conectaDB from './config/dbConnect.js'
import routes from './routes/index.js'
import manipuladorErros from './middleware/manipuladorErros.js'
import manipulador404 from './middleware/manipulador404.js'

const conexao = await conectaDB()

conexao.on('error', (erro) => {
  console.error('Erro de conexao:', erro)
})

conexao.once('open', () => {
  console.log('Conexao feita com sucesso!')
})

const app = express()

routes(app)

app.use(manipulador404)

app.use((erro, req, res, next) => {
  manipuladorErros(erro, req, res, next)
})

export default app
