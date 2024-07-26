import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Produto } from "../entities/produto.entity";
import { ProdutoService } from "./produto.service";
import { ProdutoController } from "../controllers/produto.controller";
import { CategoriaModule } from "../../categoria/service/categoria.module";
import { CategoriaService } from "../../categoria/service/categoria.service";


@Module({
    imports: [TypeOrmModule.forFeature([Produto]), CategoriaModule],
    providers: [ProdutoService, CategoriaService],
    controllers: [ProdutoController],
    exports: [TypeOrmModule]
})

export class ProdutoModule {}


