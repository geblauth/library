import express from 'express'
import AutorController from '../controllers/autorControllers.js'
import paginar from '../middleware/paginar.js'

const routes = express.Router()

routes.get('/autor', AutorController.listarAutores, paginar)
routes.get('/autor/:id', AutorController.listarAutorPorId)
routes.post('/autor', AutorController.cadastrarAutor)
routes.put('/autor/:id', AutorController.atualizarAutor)
routes.delete('/autor/:id', AutorController.excluirAutor)

export default routes
