import {Entity, BaseEntity, PrimaryGeneratedColumn, Column} from 'typeorm'

@Entity()
export default class Cliente extends BaseEntity{
    
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    nome!: string

    @Column()
    cpf!: string

    @Column()
    contato!: string
}