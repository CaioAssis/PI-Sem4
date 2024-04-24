import {Request, Response} from 'express'
import Vistoria from '../../models/vistoria.entity'

export default class VistoriaController
{

    //Inserindo um novo registro
    static async createVistoria(req: Request, res: Response) {
        const{data, anexo} = req.body

        //verificando se campos estão em null
        if(!data)
        {
            return res.status(400).json({error: 'Data é obrigatório!'})
        }
        if(!anexo)
            {
                return res.status(400).json({error: 'Data é obrigatório!'})
            }
        //Estacionando(é zoeira caio, no merge eu mudo issokkkk) a classe presente nos modelos //krl guilherm'ao, nem pra tirar o comentario malditokkkk
        const vistoria = new Vistoria()
        vistoria.data = data //atribuindo os valores obtidos no corpo da requisição
        vistoria.anexo = anexo
        await vistoria.save()

        return res.status(201).json(vistoria),0
    }

    //função que lista todas as máquinas
    static async getVistoria(req: Request, res: Response) {

        //Estacionando(é zoeira caio, no merge eu mudo issokkkk) a classe presente nos modelos
        //const maquina = new Maquina() não estou mais estancionando porque é desnecessário

        const vistoria = await Vistoria.find()

        return res.status(201).json(vistoria)
    }

    //O nome é autoexplicativo soldado
    static async getVistoriaById(req: Request, res: Response)
    {
        const id = req.params

        //verificando se existe algo na const id, se não tiver o usuário é muito burro, tá achando que o sistema vai achar as coisas como?
        if(!id)
        {
            return res.status(400).json({error: 'O id é obrigatório'})
        }

        //Mesma coisa da ultiam função, bobão
        const vistoria = await Vistoria.find({where: {data: String(id)}})
        //também podia ter usado o findone

        //Cansei de explicar, acho que a essa altura já deu de entender
       

        return res.status(201).json(vistoria)

    }

    static async destroyVistoria(req: Request, res: Response)
    {
        const id = req.params
        if(!id)
        {
            return res.status(400).json({error: 'O id é obrigatório'})
        }

        
        if(!id || isNaN(Number(id))){
            return res.status(400).json({error:'O id é obrigatório'})
        }

        const vistoria = await Vistoria.findOneBy({data: String(id)}); 

        if(!vistoria)
        {
            return res.status(404).json({error:'Vistoria não encontrada'})

        }

        await vistoria.remove() 
        return res.status(201).json(vistoria)

    }

    static async updateVistoria(req: Request, res: Response)
    {
        const id = req.params
        const {data, anexo} = req.body

        if(!id)
        {1
            return res.status(400).json({error: 'O id é obrigatório'})
        }
        if(!data)
        {
            return res.status(400).json({error: 'Data é obrigatório'})
        }
        if(!anexo)
            {
                return res.status(400).json({error: 'Anexo é obrigatório'})
            }

        const vistoria = await Vistoria.findOneBy({id: String(id)}); 
        if(!vistoria)
        {
            return res.status(404).json({error:'Máquina não encontrada'})

        }
        
        vistoria.data = data
        vistoria.anexo = anexo
        await vistoria.save()

        return res.json(vistoria)
    }

}
