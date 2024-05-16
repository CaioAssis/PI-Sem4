<<<<<<< HEAD
import {Entity, BaseEntity, PrimaryGeneratedColumn, Column} from 'typeorm'
=======
import {Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne} from 'typeorm'
import Vistoria from './vistoria.entity'
>>>>>>> Vistoria

@Entity()
export default class ModuloInspecao extends BaseEntity{
    
    @PrimaryGeneratedColumn()
    codModuloInspecao!: number

    @Column()
    status!: string

    @Column()
    descricao!: string

    @Column()
    imagem!: string

<<<<<<< HEAD
=======
    @ManyToOne(() => Vistoria, (vistoria) => vistoria.modulo)
    vistoria!: Vistoria
>>>>>>> Vistoria
}