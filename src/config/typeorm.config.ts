import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  username: 'root',
  password: '',
  database: 'tm',
  port: 3308,
  //entities: [__dirname + '/../**/*.entity.ts'],
  entities: [__dirname + '../tasks/task.entity.ts'],
  synchronize: true,
}
