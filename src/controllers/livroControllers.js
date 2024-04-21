import { autor } from "../models/Autor.js";
import livro from "../models/Livro.js";

class LivroController {

    static async listarLivroPorEditora(req, res) {

        const editora = req.query.editora;
        try {
            const livroPorEditora = await livro.find({ editora: editora });
            res.status(200).json(livroPorEditora);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha na busca!` })

        }


    }

    static async listarLivros(req, res) {

        try {
            const listaLivros = await livro.find({})
            res.status(200).json(listaLivros);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha na requisicao!` })

        }

    }

    static async listarLivroPorId(req, res) {

        try {
            const id = req.params.id
            const livroEncontrado = await livro.findById(id)
            res.status(200).json(livroEncontrado);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha na requisicao do livro!` })

        }

    }

    static async atualizarLivro(req, res) {

        try {
            const id = req.params.id
            await livro(id, req.body)
            res.status(200).json({ message: "Livro atualizado!" });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha na atualizacao do livro!` })

        }

    }


    static async deletarLivro(req, res) {

        try {
            const id = req.params.id
            await livro.findByIdAndDelete(id)
            res.status(200).json({ message: "Livro deletado!" });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha na delecao do livro!` })

        }

    }


    static async cadastrarLivros(req, res) {
        const novoLivro = req.body;

        try {
            const autorEncontrado = await autor.findById(novoLivro.autor)
            const livroCompleto = { ...novoLivro, autor: { ...autorEncontrado._doc } }
            const livroCriado = await livro.create(livroCompleto)
            res.status(201).json({ message: "Livro Criado com Sucesso!", livro: livroCriado });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha ao cadastrar livro!` })
        }
    }

}

export default LivroController

