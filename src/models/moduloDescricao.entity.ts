import {Entity, BaseEntity, PrimaryGeneratedColumn, Column} from 'typeorm'

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

}