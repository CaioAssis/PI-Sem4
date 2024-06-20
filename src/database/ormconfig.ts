import { DataSource } from "typeorm"
import { join } from "path"
import { createInitialUsers } from "../seeds/create-funcionario"
import { createInitialModules } from "../seeds/create-modulos";
import { createInitialClients } from "../seeds/create-client";

const dataBase = new DataSource({
    type: 'sqlite',
    database: './src/database/database.sqlite',
    logging: true,
    synchronize: true,
    entities: [
        join(__dirname, '..', 'models/*.{ts,js}')
    ]
});

(async () => {
    try {
      await dataBase.initialize();
      console.log('Banco de dados iniciado!');
      await createInitialUsers();
      await createInitialModules();
      await createInitialClients()
    } catch (error) {
      console.error('Falha ao iniciar o banco de dados!', error);
    }
  })()

export default dataBase