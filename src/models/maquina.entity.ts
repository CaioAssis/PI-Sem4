import {Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable} from 'typeorm'
import moduloDescricao from './moduloDescricao.entity'
import ModuloDescricao from './moduloDescricao.entity'
@Entity()
export default class Maquina extends BaseEntity{
    
    @PrimaryGeneratedColumn()
    codMaquina!: number

    @Column()
    descricao!: string


    //Tá aqui caio, 3 linhas de código, feliz?
    @ManyToMany((()=> moduloDescricao))
    @JoinTable()
    idModulo!: moduloDescricao[]
}