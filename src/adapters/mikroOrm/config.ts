import { app, postgres } from '@/main/env';
import { MikroOrmDriverOptions } from './types';

// TODO: improve these variables
const mikroOrmProductionPath = `${app.currentWorkingDirectory}/dist/drivers/mikroOrm`;
const mikroOrmDevelopmentPath = `${app.currentWorkingDirectory}/src/drivers/mikroOrm`;

const config: MikroOrmDriverOptions = {
  dbName: postgres.db,
  user: postgres.user,
  password: postgres.password,
  type: 'postgresql',
  allowGlobalContext: true,
  forceUtcTimezone: true,
  debug: true,
  entities: [`${mikroOrmProductionPath}/entities`],
  entitiesTs: [`${mikroOrmDevelopmentPath}/entities`],
  migrations: {
    tableName: 'migrations',
    path: `${mikroOrmProductionPath}/migrations`,
    pathTs: `${mikroOrmDevelopmentPath}/migrations`,
  },
};

export default config;
