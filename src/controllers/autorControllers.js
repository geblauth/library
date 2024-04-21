import { autor } from "../models/Autor.js";

class AutorController {

    static async listarAutor(req, res) {

        try {
            const listarAutor = await autor.find({})
            res.status(200).json(listarAutor);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha na requisicao!` })

        }

    }

    static async listarAutorPorId(req, res) {

        try {
            const id = req.params.id
            const AutorEncontrado = await autor.findById(id)
            res.status(200).json(AutorEncontrado);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha na requisicao do Autor!` })

        }

    }

    static async atualizarAutor(req, res) {

        try {
            const id = req.params.id
            await autor.findByIdAndUpdate(id, req.body)
            res.status(200).json( {message: "Autor atualizado!" });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha na atualizacao do Autor!` })

        }

    }


    static async deletarAutor(req, res) {

        try {
            const id = req.params.id
            await autor.findByIdAndDelete(id)
            res.status(200).json( {message: "Autor deletado!" });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha na delecao do Autor!` })

        }

    }


    static async cadastrarAutor(req, res) {
        try {
            const novoAutor = await autor.create(req.body);
            res.status(201).json({ message: "Autor Criado com Sucesso!", autor: novoAutor });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha ao cadastrar Autor!` })
        }
    }

}

export default AutorController

