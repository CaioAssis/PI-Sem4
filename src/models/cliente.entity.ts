import {Entity, BaseEntity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm'
import Maquina from './maquina.entity'

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

    @OneToMany(() => Maquina, maquina => maquina.id)
    maquinas!: Maquina[]

}