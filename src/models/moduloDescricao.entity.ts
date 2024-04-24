import {Entity, BaseEntity, PrimaryGeneratedColumn, Column} from 'typeorm'

@Entity()
export default class ModuloDescricao extends BaseEntity{
    
    @PrimaryGeneratedColumn()
    codModuloDescricao!: number

    @Column()
    titulo!: string

    @Column()
    descricao!: string

    @Column()
    imagem!: string

}