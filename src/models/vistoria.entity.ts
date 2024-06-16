import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import Maquina from "./maquina.entity"
import Funcionario from "./funcionario.entity"
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

    @Column()
    maquinaId!: number

    @ManyToOne(() => Maquina, maquina => maquina.vistorias)
    maquina!: Maquina

    @ManyToOne(() => Funcionario, funcionario => funcionario.vistoria)
    funcionario!: Funcionario

}