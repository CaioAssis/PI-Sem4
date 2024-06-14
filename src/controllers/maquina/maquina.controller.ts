import {Request, Response} from 'express'
import maqRoutes from '../../routes/maquina/maquina.routes'
import Maquina from '../../models/maquina.entity'
import ModuloDescricao from '../../models/moduloDescricao.entity'
import { getRepository } from 'typeorm'

export default class MaquinaController
{

    //Inserindo um novo registro
    static async createMaquina(req: Request, res: Response) {
        const{descricao, modulos} = req.body
        
        
        if(!descricao)
        {
            return res.status(400).json({error: 'O modelo é obrigatório!'})
        }
        if (!modulos || !Array.isArray(modulos)) {
            return res.status(400).json({ error: 'Os módulos são obrigatórios e devem ser um array!' });
        }
    

        const maquina = new Maquina()
        maquina.descricao = descricao
        var mod: ModuloDescricao[] = []

        const promessas = modulos.map(async (num) => {
            const searchMod = await ModuloDescricao.find({ where: { id: Number(num.id) } });
            return searchMod;
        });
        
        // Resolve todas as promessas
        const resultados = await Promise.all(promessas);
        
        // Adiciona os resultados ao array mod, sem apagar o conteúdo existente
        resultados.forEach((resultado) => {
            // Se searchMod for um array, você pode usar push para adicionar cada item individualmente
            resultado.forEach((item) => mod.push(item));
        });


        maquina.modulosDescricao = mod
        await maquina.save()

        return res.status(201).json(maquina)
    }

    //função que lista todas as máquinas
    static async getMaquina(req: Request, res: Response) {

        //const maquina = await Maquina.find()
        try {
            const maq = getRepository(Maquina);
            const maquina = await maq.find({ relations: ['modulosDescricao'] });
            return res.status(200).json(maquina);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Internal server error' });
        }
    }

    static async getMaquinaById(req: Request, res: Response)
    {
        const { id } = req.params

        if(!id)
        {
            return res.status(400).json({error: 'O id é obrigatório'})
        }

        const maquina = await Maquina.find({where: {id: Number(id)}})

        return res.status(201).json(maquina)

    }




    static async destroyMaquina(req: Request, res: Response)
    {
        const { id } = req.params
        if(!id)
        {
            return res.status(400).json({error: 'O id é obrigatório'})
        }

        
        if(!id || isNaN(Number(id))){
            return res.status(400).json({error:'O id é obrigatório'})
        }

        const maquina = await Maquina.findOneBy({id: Number(id)}); 

        if(!maquina)
        {
            return res.status(404).json({error:'Máquina não encontrada'})

        }

        await maquina.remove() 
        return res.status(201).json(maquina)

    }

    static async updateMaquina(req: Request, res: Response)
    {
        const { id }  = req.params
        const descricao = req.body

        if(!id)
        {
            return res.status(400).json({error: 'O id é obrigatório'})
        }
        if(!descricao)
        {
            return res.status(400).json({error: 'O modelo é obrigatório'})
        }

        const maquina = await Maquina.findOneBy({id: Number(id)}); 
        if(!maquina)
        {
            return res.status(404).json({error:'Máquina não encontrada'})

        }
        
        maquina.descricao = descricao

        await maquina.save()

        return res.json(maquina)
    }

}
function useState(): [any, any] {
    throw new Error('Function not implemented.')
}

