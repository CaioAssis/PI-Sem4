import {Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne} from 'typeorm'
import Vistoria from './vistoria.entity'

@Entity()
export default class ModuloInspecao extends BaseEntity{
    
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    status!: string

    @Column()
    descricao!: string

    @Column()
    imagem!: string

    @ManyToOne(() => Vistoria, (vistoria) => vistoria.modulo)
    vistoria!: Vistoria
}