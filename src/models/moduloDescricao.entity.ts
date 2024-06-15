import {Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToMany} from 'typeorm'
import Maquina from './maquina.entity'

@Entity()
export default class ModuloDescricao extends BaseEntity{

    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    titulo!: string

    @Column()
    descricao!: string

    @Column()
    imagem!: string

    @ManyToMany(() => Maquina, maq => maq.modulosDescricao)
    maquinas?: Maquina[]

}