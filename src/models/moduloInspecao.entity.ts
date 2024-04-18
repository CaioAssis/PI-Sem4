import {Entity, BaseEntity, PrimaryGeneratedColumn, Column} from 'typeorm'

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

}