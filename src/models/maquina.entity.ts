import {Entity, BaseEntity, PrimaryGeneratedColumn, Column} from 'typeorm'
import moduloDescricao from './moduloDescricao.entity'
import ModuloDescricao from './moduloDescricao.entity'
@Entity()
export default class Maquina extends BaseEntity{
    
    @PrimaryGeneratedColumn()
    codMaquina!: number

    @Column()
    descricao!: string

    
}