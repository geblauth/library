import mongoose from 'mongoose'
import ErroBase from '../erros/ErroBase.js'
import RequisicaoIncorreta from '../erros/RequisicaoIncorreta.js'
import ErroValidacao from '../erros/ErroValidacao.js'

function manipuladorErros (erro, req, res, next) {
  if (erro instanceof mongoose.Error.CastError) {
    new RequisicaoIncorreta().enviarReposta(res)
  } else if (erro instanceof mongoose.Error.ValidationError) {
    new ErroValidacao(erro).enviarReposta(res)
  } else if (erro instanceof ErroBase) {
    erro.enviarReposta(res)
  } else {
    new ErroBase().enviarReposta(res)
  }
}
export default manipuladorErros
