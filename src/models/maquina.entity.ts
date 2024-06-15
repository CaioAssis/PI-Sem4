import {Entity, BaseEntity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable} from 'typeorm'
import Vistoria from './vistoria.entity'
import ModuloDescricao from './moduloDescricao.entity'

@Entity()
export default class Maquina extends BaseEntity{
    
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    descricao!: string

    @OneToMany(()=> Vistoria, vistoria => vistoria.maquina)
    vistorias!: Vistoria[]

    @ManyToMany(()=> ModuloDescricao)
    //@JoinTable()
    @JoinTable({
        name: 'assos_maq_mod',
        joinColumn: {name: 'maq_id', referencedColumnName: 'id'},
        inverseJoinColumn: {name: 'mod_id', referencedColumnName: 'id'}
    })
    modulosDescricao?: ModuloDescricao[]
}