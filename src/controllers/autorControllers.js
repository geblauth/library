import NaoEncontrado from '../erros/NaoEncontrado.js'
import { Autor } from '../models/index.js'
class AutorController {
  static listarAutores = async (req, res, next) => {
    try {
      const autoresResultado =  Autor.find()

      req.resultado = autoresResultado;

      next();
    
    } catch (erro) {
      next(erro)
    }
  }

  static listarAutorPorId = async (req, res, next) => {
    try {
      const id = req.params.id

      const autorResultado = await Autor.findById(id)

      if (autorResultado !== null) {
        res.status(200).send(autorResultado)
      } else {
        next(new NaoEncontrado('ID do Autor não localizado.'))
      }
    } catch (erro) {
      next(erro)
    }
  }

  static atualizarAutor = async (req, res, next) => {
    try {
      const id = req.params.id

      const autorResultado = await Autor.findByIdAndUpdate(id, { $set: req.body })

      if (autorResultado !== null) {
        res.status(200).send({ message: 'Autor atualizado com sucesso' })
      } else {
        next(new NaoEncontrado('Id do Autor não localizado.'))
      }
    } catch (erro) {
      next(erro)
    }
  }

  static excluirAutor = async (req, res, next) => {
    try {
      const id = req.params.id

      const autorResultado = await Autor.findByIdAndDelete(id)

      if (autorResultado !== null) {
        res.status(200).send({ message: 'Autor removido com sucesso' })
      } else {
        next(new NaoEncontrado('Id do Autor não localizado.'))
      }
    } catch (erro) {
      next(erro)
    }
  }

  static cadastrarAutor = async (req, res, next) => {
    try {
      const autorr = new Autor(req.body)

      const autorResultado = await autorr.save()

      res.status(201).send(autorResultado.toJSON())
    } catch (erro) {
      next(erro)
    }
  }
}

export default AutorController
