import {Entity, BaseEntity, PrimeryGeneratedColumm, Columm} from 'typeorm'

@Entity()
export default class Cliente extends BaseEntity{
    
    @PrimeryGeneratedColumm()
    id!: number

    @Columm()
    nome!: string

    @Columm()
    cpf!: string

    @Columm()
    contato!: string
}