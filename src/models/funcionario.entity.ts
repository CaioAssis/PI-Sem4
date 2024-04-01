import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import Token from "./token.entity"

@Entity()
export default class Funcionario extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    nome!: string

    @Column()
    cnpj!: string

    @Column()
    contato!: string

    @Column()
    usuario!: string

    @Column()
    senha!: string

    @OneToMany(() => Token, token => token.func)
    tokens! : Token[]

    //@OneToMany(() => Task, task => task.user)
    //tasks!: Task[]
}
