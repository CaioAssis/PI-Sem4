import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne, OneToMany } from "typeorm"
import ModuloInspecao from "./moduloInspecao.entity"
import Maquina from "./maquina.entity"
@Entity()
export default class Vistoria extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    data! : String
    
    @Column()
    anexo!  :  String

    @Column()
    status!: String

    @OneToMany(() => ModuloInspecao, (modulo) => modulo.vistoria)
    modulo!: ModuloInspecao[]

    @ManyToOne(() => Maquina, maquina => maquina.vistorias)
    maquina!: Maquina

}