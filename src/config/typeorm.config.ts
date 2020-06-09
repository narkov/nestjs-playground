import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  username: 'root',
  password: '',
  database: 'tm',
  entities: [__dirname + '/../**/*.entity.ts'],
  synchronize: true,
}
