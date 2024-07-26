import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produto } from './produto/entities/produto.entity';
import { ProdutoModule } from './produto/services/produto.module';
import { Categoria } from './categoria/entities/categoria.entity';
import { CategoriaModule } from './categoria/service/categoria.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_lojagames',
      entities: [Produto, Categoria],
      synchronize: true, 
  }),
  ProdutoModule,
  CategoriaModule
],
  controllers: [],
  providers: [],
})
export class AppModule {}