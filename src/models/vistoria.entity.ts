import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne } from "typeorm"

@Entity()
export default class Vistoria extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    data! : String
}