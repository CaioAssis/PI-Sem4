<<<<<<< HEAD
import {Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable} from 'typeorm'
import moduloDescricao from './moduloDescricao.entity'
import ModuloDescricao from './moduloDescricao.entity'
=======
import {Entity, BaseEntity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm'
import Vistoria from './vistoria.entity'

>>>>>>> Vistoria
@Entity()
export default class Maquina extends BaseEntity{
    
    @PrimaryGeneratedColumn()
    codMaquina!: number

    @Column()
    descricao!: string

<<<<<<< HEAD

    //Tá aqui caio, 3 linhas de código, feliz?
    @ManyToMany((()=> moduloDescricao))
    @JoinTable()
    idModulo!: moduloDescricao[]
=======
    @OneToMany(()=> Vistoria, vistoria => vistoria.maquina)
    vistorias!: Vistoria[]
>>>>>>> Vistoria
}