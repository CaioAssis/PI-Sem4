import {Entity, BaseEntity, PrimaryGeneratedColumn, Column} from 'typeorm'

@Entity()
export default class Maquina extends BaseEntity{
    
    @PrimaryGeneratedColumn()
    codMaquina!: number

    @Column()
    descricao!: string

}