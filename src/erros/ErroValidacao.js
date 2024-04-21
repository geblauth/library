import RequisicaoIncorreta from './RequisicaoIncorreta.js'

class ErroValidacao extends RequisicaoIncorreta {
  constructor (erro) {
    const mensagemErro = Object.values(erro.errors)
      .map(erro => erro.message)
      .join('; ')
    super(`Houve um erro: ${mensagemErro}`)
  }
}
export default ErroValidacao
