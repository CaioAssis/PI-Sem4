import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import Token from "./token.entity"
import Vistoria from "./vistoria.entity"
//import Vistoria from "./vistoria.entity"

@Entity()
export default class Funcionario extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    nome!: string

    @Column()
    matricula!: string

    @Column()
    contato!: string

    @Column()
    usuario!: string

    @Column()
    senha!: string

    @Column()
    role!: string
    /*
    ger - gerência, acesso total + alteração de roles
    fun - funcionario, criação/edição de inspeção própria, visualização de inspeções
    ter - funcionário tercerizado, criação/ edição de inspeção própria, visualização de inspeções realizadas
    */

    @OneToMany(() => Token, token => token.func)
    tokens! : Token[]

    @OneToMany(() => Vistoria, vistoria => vistoria.id)
    vistoria!: Vistoria[]
}
