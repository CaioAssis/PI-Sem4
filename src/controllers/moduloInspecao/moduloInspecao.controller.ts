import {Request, Response} from 'express'
import maqRoutes from '../../routes/moduloInspecao/moduloInspecao.routes'
import ModuloInspecao from '../../models/moduloInspecao.entity'

export default class ModuloInspecaoController
{

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
        }
        if(!descricao)
        {
            return res.status(400).json({error: 'A descrição é obrigatória!'})
        }
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

        return res.status(201).json(moduloInspecao)
    }

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
        if(!id)
        {
            return res.status(400).json({error: 'O id é obrigatório'})
        }

        //Mesma coisa da ultima função
        const moduloInspecao = await ModuloInspecao.find({where: {id: Number(id)}})
        //também podia ter usado o findone


        return res.status(201).json(moduloInspecao)

    }


    //Eliminar um registro
    static async destroyModuloInspecao(req: Request, res: Response)
    {
        const {id} = req.params
        if(!id)
        {
            return res.status(400).json({error: 'O id é obrigatório'})
        }

        
        if(!id || isNaN(Number(id))){
            return res.status(400).json({error:'O id é obrigatório'})
        }

        const moduloInspecao = await ModuloInspecao.findOneBy({id: Number(id)}); 

        if(!moduloInspecao)
        {
            return res.status(404).json({error:'Modulo não encontrado'})

        }

        await moduloInspecao.remove() 
        return res.status(201).json(moduloInspecao)

    }


    //Atualizar um registro
    static async updateModuloInspecao(req: Request, res: Response)
    {
        const {id} = req.params
        const {status, descricao, imagem, vistoria} = req.body

        if(!id)
        {
            return res.status(400).json({error: 'O id é obrigatório'})
        }
        if(!status)
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

        const moduloInspecao = await ModuloInspecao.findOneBy({id: Number(id)}); 
        if(!moduloInspecao)
        {
            return res.status(404).json({error:'Não encontrado'})

        }
        
        moduloInspecao.status = status
        moduloInspecao.descricao = descricao;
        moduloInspecao.imagem = imagem;
        moduloInspecao.vistoria = vistoria;

        await moduloInspecao.save()

        return res.json(moduloInspecao)
    }

}
