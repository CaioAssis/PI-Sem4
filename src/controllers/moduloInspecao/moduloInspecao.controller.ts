import {Request, Response} from 'express'
<<<<<<< HEAD
=======
import maqRoutes from '../../routes/moduloInspecao/moduloInspecao.routes'
>>>>>>> Vistoria
import ModuloInspecao from '../../models/moduloInspecao.entity'

export default class ModuloInspecaoController
{

<<<<<<< HEAD
    static async createModuloInspecao(req: Request, res: Response) { //Cria um novo modulo inspeção
        const{codModuloInspecao, status, descricao, imagem} = req.body

        //verificando se campos estão em null
        if(!codModuloInspecao)
        {
            return res.status(400).json({error:'O código é obrigatório!'})
        }
        if(!status)
        {
            return res.status(400).json({error: 'O status é obrigatório'})
=======
    /**
     * Para utilizar os metodos é necessário passar o body em json, em outra palavras a rota irá fornecer a seguinte estrutura
     * {
     *  "status": "bom",
     *  "descricao": "exemplo",
     *  "imagem": "endereco" 
     * }
     */

    //Inserindo um novo registro
    static async createModuloInspecao(req: Request, res: Response) {
        const{status, descricao, imagem, vistoria} = req.body

        //verificando se campos estão em null
        if(!status)
        {
            return res.status(400).json({error:'O status é obrigatório!'})
>>>>>>> Vistoria
        }
        if(!descricao)
        {
            return res.status(400).json({error: 'A descrição é obrigatória!'})
        }
<<<<<<< HEAD
        if(!imagem){
            return res.status(400).json({error: 'A imagem é obrigatória!'})
        }

        const moduloInspecao = new ModuloInspecao()
        moduloInspecao.codModuloInspecao = codModuloInspecao//atribuindo os valores obtidos no corpo da requisição
        moduloInspecao.status = status
        moduloInspecao.descricao = descricao
        moduloInspecao.imagem = imagem
=======
        if(!imagem)
            {
                return res.status(400).json({error: 'A imagem é obrigatórioa!'})
            }
        if(!vistoria)
                {
                    return res.status(400).json({error: 'A relação é obrigatórioa!'})
                }
    
        //Estanciando
        const moduloInspecao = new ModuloInspecao()        
        moduloInspecao.status = status
        moduloInspecao.descricao = descricao;
        moduloInspecao.imagem = imagem;
        moduloInspecao.vistoria = vistoria;

        await moduloInspecao.save()
>>>>>>> Vistoria

        return res.status(201).json(moduloInspecao)
    }

<<<<<<< HEAD
    static async getModuloInspecao(req: Request, res: Response){
        const moduloInspecao = await ModuloInspecao.find()
        res.json(moduloInspecao)
    }

    static async getModuloInspecaoById(req: Request, res: Response)
    {
        const id = req.params

=======
    //função que lista todas as máquinas
    static async getModuloInspecao(req: Request, res: Response) {
        //Estacionando(é zoeira caio, no merge eu mudo issokkkk) a classe presente nos modelos
        //const moduloInspecao = new Maquina() não estou mais estancionando porque é desnecessário

        const moduloInspecao = await ModuloInspecao.find()

        return res.status(201).json(moduloInspecao)
    }

    //O nome é autoexplicativo soldado
    static async getModuloInspecaoById(req: Request, res: Response)
    {
        const {id} = req.params

        //verificando se existe algo na const id, se não tiver o usuário é muito burro, tá achando que o sistema vai achar as coisas como?
>>>>>>> Vistoria
        if(!id)
        {
            return res.status(400).json({error: 'O id é obrigatório'})
        }

<<<<<<< HEAD
        const moduloInspecao = await ModuloInspecao.find({where: {codModuloInspecao: Number(id)}})
        
=======
        //Mesma coisa da ultima função
        const moduloInspecao = await ModuloInspecao.find({where: {codModuloInspecao: Number(id)}})
        //também podia ter usado o findone


>>>>>>> Vistoria
        return res.status(201).json(moduloInspecao)

    }

<<<<<<< HEAD
    static async destroyModuloInspecao(req: Request, res: Response)
    {
        const id = req.params
=======

    //Eliminar um registro
    static async destroyModuloInspecao(req: Request, res: Response)
    {
        const {id} = req.params
>>>>>>> Vistoria
        if(!id)
        {
            return res.status(400).json({error: 'O id é obrigatório'})
        }

        
        if(!id || isNaN(Number(id))){
            return res.status(400).json({error:'O id é obrigatório'})
        }

        const moduloInspecao = await ModuloInspecao.findOneBy({codModuloInspecao: Number(id)}); 

<<<<<<< HEAD
        //Verificando se a const moduloInspecao criada acima já recebeu um retorno
=======
>>>>>>> Vistoria
        if(!moduloInspecao)
        {
            return res.status(404).json({error:'Modulo não encontrado'})

        }

        await moduloInspecao.remove() 
        return res.status(201).json(moduloInspecao)

    }

<<<<<<< HEAD
    static async updateModuloInspecao(req: Request, res: Response)
    {
        const id = req.params
        const {status, descricao, imagem} = req.body
=======

    //Atualizar um registro
    static async updateModuloInspecao(req: Request, res: Response)
    {
        const {id} = req.params
        const {status, descricao, imagem, vistoria} = req.body
>>>>>>> Vistoria

        if(!id)
        {
            return res.status(400).json({error: 'O id é obrigatório'})
        }
        if(!status)
<<<<<<< HEAD
        {
            return res.status(400).json({error: 'O status é obrigatório'})
        }
        if(!descricao)
        {
            return res.status(400).json({error: 'A descrição é obrigatório'})
        }
        if(!imagem)
        {
            return res.status(400).json({error: 'A imagem é obrigatório'})
        }
=======
            {
                return res.status(400).json({error: 'O status é obrigatória'})
            }
        if(!descricao)
        {
            return res.status(400).json({error: 'A descrição é obrigatória'})
        }
        if(!imagem)
            {
                return res.status(400).json({error: 'A imagem é obrigatória'})
            }
            if(!vistoria)
                {
                    return res.status(400).json({error: 'A vistoria é obrigatória'})
                }
>>>>>>> Vistoria

        const moduloInspecao = await ModuloInspecao.findOneBy({codModuloInspecao: Number(id)}); 
        if(!moduloInspecao)
        {
<<<<<<< HEAD
            return res.status(404).json({error:'Máquina não encontrada'})
=======
            return res.status(404).json({error:'Não encontrado'})
>>>>>>> Vistoria

        }
        
        moduloInspecao.status = status
<<<<<<< HEAD
        moduloInspecao.descricao = descricao
        moduloInspecao.imagem = imagem
=======
        moduloInspecao.descricao = descricao;
        moduloInspecao.imagem = imagem;
        moduloInspecao.vistoria = vistoria;
>>>>>>> Vistoria

        await moduloInspecao.save()

        return res.json(moduloInspecao)
    }

}
