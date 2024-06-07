import {Entity, BaseEntity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable} from 'typeorm'
import Vistoria from './vistoria.entity'
import ModuloDescricao from './moduloDescricao.entity'

@Entity()
export default class Maquina extends BaseEntity{
    
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    descricao!: string

    @OneToMany(()=> Vistoria, vistoria => vistoria.maquina)
    vistorias!: Vistoria[]

    @ManyToMany(()=> ModuloDescricao)
    @JoinTable()
    modulosDescricao!: ModuloDescricao[]
}