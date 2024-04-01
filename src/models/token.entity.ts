import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne } from "typeorm"
import Funcionario from "./funcionario.entity"

@Entity()
export default class Token extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    token! : string

    @Column()
    refreshToken! : string

    @Column()
    expiresAt! : Date

    @Column()
    userId! : number

    @ManyToOne(() => Funcionario, func => func.tokens)
    func!: Funcionario
}