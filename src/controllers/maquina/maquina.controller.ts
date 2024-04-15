import {Request, Response} from 'express'
import maqRoutes from '../../routes/maquina/maquina.routes'
import Maquina from '../../models/maquina.entity'

export default class MaquinaController
{
    //função que lista todas as máquinas
    static async getMaquina(req: Request, res: Response) {
        const{codMaquina, descricao} = req.body

        //verificando se campos estão em null
        if(!codMaquina)
        {
            return res.status(400).json({error:'O código é obrigatório!'})
        }
        if(!descricao)
        {
            return res.status(400).json({error: 'O modelo é obrigatório!'})
        }

        //Estacionando(é zoeira caio, no merge eu mudo issokkkk) a classe presente nos modelos
        const maquina = new Maquina()
        maquina.codMaquina = codMaquina//atribuindo os valores obtidos no corpo da requisição
        maquina.descricao = descricao

        await maquina.save()

        return res.status(201).json(maquina)
    }

    //O nome é autoexplicativo soldado
    static async getMaquinaById(req: Request, res: Response)
    {
        const id = req.params

        //verificando se existe algo na const id, se não tiver o usuário é muito burro, tá achando que o sistema vai achar as coisas como?
        if(!id)
        {
            return res.status(400).json({error: 'O id é obrigatório'})
        }

        //Mesma coisa da ultiam função, bobão
        const maquina = await Maquina.find({where: {codMaquina: Number(id)}})
        //também podia ter usado o findone

        //Cansei de explicar, acho que a essa altura já deu de entender
       

        return res.status(201).json(maquina)

    }

    static async destroyMaquina(req: Request, res: Response)
    {
        const id = req.params
        if(!id)
        {
            return res.status(400).json({error: 'O id é obrigatório'})
        }

        
        if(!id || isNaN(Number(id))){
            return res.status(400).json({error:'O id é obrigatório'})
        }

        const maquina = await Maquina.findOneBy({codMaquina: Number(id)}); 

        if(!maquina)
        {
            return res.status(404).json({error:'Máquina não encontrada'})

        }

        await maquina.remove() 
        return res.status(201).json(maquina)

    }

    static async updateMaquina(req: Request, res: Response)
    {
        const id = req.params
        const descricao = req.body

        if(!id)
        {
            return res.status(400).json({error: 'O id é obrigatório'})
        }
        if(!descricao)
        {
            return res.status(400).json({error: 'O modelo é obrigatório'})
        }

        const maquina = await Maquina.findOneBy({codMaquina: Number(id)}); 
        if(!maquina)
        {
            return res.status(404).json({error:'Máquina não encontrada'})

        }
        
        maquina.descricao = descricao

        await maquina.save()

        return res.json(maquina)
    }

}
